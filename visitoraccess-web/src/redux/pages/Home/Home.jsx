import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'antd';
import { compose } from 'recompose';
import { createForm } from 'rc-form';

import api from '../../../api';
import { Rules } from '../../pages';
import { CustomModal } from '../../../components';
import { logoutUser } from '../../../redux/pages/Login/actions';
import About from "../../../images/about_icon.svg";
import Logout from "../../../images/logout_icon.svg";
import PersonIcon from "../../../images/person_icon.svg";
import NoResultsIcon from "../../../images/no_results_icon.svg";
import styles from './Home.module.scss';

const renderDescription = (value, record) => {
  const { bookedPerson, time } = record;
  if (!bookedPerson && !time) return;

  return (
    <div className={styles.descriptionInfo}>
      {time &&
        <span className={styles.time}>
          <img src={PersonIcon} alt="Icon"/>
          {time}
        </span>
      }
      {bookedPerson && <span className={styles.bookedPerson}>by {bookedPerson}</span>}
    </div>
  )
}

const LOGOUT = 'logout';
const SHOW_RULES = 'showRules';
const UNCHECK = 'uncheck';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (value, record) => {
      const { available, bookedPerson } = record;
      const isAvailable = !available || bookedPerson;
      return <span className={`${styles.name} ${isAvailable ? styles.notAvailable : styles.available}`}>{value}</span>
    }
  },
  {
    title: 'Floor',
    dataIndex: 'floor',
    render: (value, record) =>
      <span className={styles.floor}>
        <span>{value}</span>
        floor
      </span>
  },
  {
    title: 'Description',
    className: `${styles.descriptionColumn}`,
    render: renderDescription,
  },
];

class Home extends PureComponent {
  state = {
    currentPatient: {},
    modalType: 'none',
    users: [],
    wrapWidth: 1000,
  }

  componentDidMount() {
    this.onGetPatients();
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    const wrapperWidth  = document.getElementById('wrapper').clientWidth;
    this.setState({wrapWidth: wrapperWidth});
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  onGetPatients = (params = false) => {
    const defaultParams = { name: "" };
    let allParams = defaultParams;
    if (params) {
      allParams = {
        ...defaultParams,
        ...params,
      };
    };
    
    api.patient.getPatients(allParams)
    .then(res => this.setState({ users: res.content}))
    .catch(res => console.log(res))
  }

  onCloseModal = isLogout => {
    const { logoutUser } = this.props;

    isLogout && logoutUser();
    this.setState({ modalType: 'none' });
  }

  handleUncheckStatus = isSend => {
    const { currentPatient } = this.state;

    if (isSend) {      
      api.patient.unbookPatient(currentPatient.id)
        .then(() => this.onGetPatients())
        .catch(res => console.log(res))
    }
    this.setState({ modalType: 'none' });
  }

  onFormChange = () => {
    const { form } = this.props;
    const { name, floor } = form.getFieldsValue();
    const params = { name };

    if (floor) {
      params.floor = floor;
    }
    this.onGetPatients(params);
  }

  onRowCkick = (record, rowIndex) => {
    if (record.available) {
      this.setState({
        modalType: record.bookedPerson ? UNCHECK : SHOW_RULES,
        currentPatient: record,
      });
    }
  }

  onCloseRules = (isReload = false) => {
    this.setState({ modalType: 'none' });
    isReload && this.onGetPatients();
  }

  getModalBlock = () => {
    const { currentPatient, modalType } = this.state;
    switch (modalType) {
      case SHOW_RULES:
        return (
          <Rules
            currentPatient={currentPatient}
            onClose={this.onCloseRules}
          />
        );
      case LOGOUT:
        return (
          <div className={styles.logoutWrap}>
            <h3>Confirm Logout</h3>
            <p>Please cancel or confirm your logout</p>
            <div className={styles.logoutButtonWrap}>
              <button onClick={() => this.onCloseModal(false)}>Cancel</button>
              <button onClick={() => this.onCloseModal(true)}>Confirm</button>
            </div>
          </div>
        );
      case UNCHECK:
        return (
          <div className={styles.uncheckWrap}>
            <h3>The status of patient will be changed to available.</h3>
            <div className={styles.logoutButtonWrap}>
              <button onClick={() => this.handleUncheckStatus(false)}>Cancel</button>
              <button onClick={() => this.handleUncheckStatus(true)}>Ok</button>
            </div>
          </div>
        )
      default:
        return null;
    }
  }

  render() {
    const { modalType, users, wrapWidth } = this.state;
    const { form } = this.props;

    return (
      <div className={styles.mainWrapper} id="wrapper">
        <header className={styles.header}>
          <Link to='/about' className={styles.link}>
            <img src={About} alt="about page"/>
          </Link>
          <span className={styles.title}>Search Patient</span>
          <button
            onClick={() => this.setState({ modalType: LOGOUT })}            
            className={styles.link}
          >
            <img src={Logout} alt="logout"/>
          </button>
        </header>
        <section className={styles.wrapper}>
          <form className={styles.inputWrap} onChange={this.onFormChange}>
            <label className={styles.inputLabel}>
              <span>Patient Name</span>
              {form.getFieldDecorator('name', {
                initialValue: '',
              })(
                <input 
                  className={styles.basicInput}
                  placeholder="John Smith" 
                  type="text"
                />
              )}
            </label>
            <label className={styles.inputLabel}>
              <span>Floor</span>
              {form.getFieldDecorator('floor', {
                initialValue: '',
              })(
                <input 
                  className={styles.basicInput}
                  placeholder="5" 
                  type="number"
                />
              )}
            </label>
          </form>
          {users.length > 0 ?
            <div className={styles.tableWrap}>
              <Table
                columns={columns}
                dataSource={users}
                rowKey="id"
                pagination={users.length > 100 && { pageSize: 100 }}
                size="small"
                showHeader={false}
                expandable={wrapWidth < 500 && {
                  expandedRowRender: record => renderDescription(null, record),
                  expandIcon: () => null,
                  expandRowByClick: true,
                  rowExpandable: record => record.bookedPerson,
                }}
                onRow={(record, rowIndex) => {
                  return {
                    onClick: event => this.onRowCkick(record, rowIndex)
                  };
                }}
                rowClassName={record => !record.available ? styles.notClickedRow : ''}
              />
            </div> :
            <div className={styles.notFound}>
              <img src={NoResultsIcon} alt="No Results"/>
              <span>No Results Found</span>
            </div>
          }
        </section>
        <CustomModal
          visible={modalType !== 'none'}
          className={`${styles.modalWrap} ${modalType === SHOW_RULES && styles.rulesWrap}`}
        >
          {this.getModalBlock()}
        </CustomModal>
      </div>
    )
  }
}

const mapDispatchToProps = {
  logoutUser,
};

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  createForm(),
)(Home);
