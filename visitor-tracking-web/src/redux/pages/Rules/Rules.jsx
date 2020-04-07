import React, { PureComponent } from 'react';
import { Radio } from 'antd';
import { compose } from 'recompose';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';

import api from '../../../api';
import { getQuestions, getRules } from './actions';
import { selectQuestions, selectRules } from './selectors';
import { CustomModal } from '../../../components';
import ErrorIcon from "../../../images/error_icon.svg";
import SuccessIcon from "../../../images/success_icon.svg";
import styles from './Rules.module.scss';

class Rules extends PureComponent {
  state = {
    modalStatus: 'none',
  }

  componentDidMount() {
    const { questions, rules } = this.props;

    if (questions.length === 0 || rules.length === 0) {
      this.getRulesWithQuestions();
    }
  }

  componentDidUpdate(prevProps) {
    const { form } = this.props;
    const isCompleted = this.isCompletedTest();
    if (prevProps.form !== form && isCompleted !== null) {
      isCompleted
        ? this.onBookPatient()
        : this.setState({ modalStatus: 'declined'});
    }
  }

  getRulesWithQuestions = () => {
    const { getQuestions, getRules } = this.props;
    Promise.all([
      api.patient.getRules(),
      api.patient.getSurvey(),
    ])
      .then(res => {
        const questions = res.find(item => item.questions).questions;
        const rules = res.find(item => item.rules).rules;
        getQuestions(questions);
        getRules(rules);
      })
      .catch(res => console.log(res));
  }

  isCompletedTest = () => {
    const { form, questions } = this.props;
    const answers = form.getFieldsValue();
    const answerValues = Object.values(answers);
    const getRealAnswer = answerValues.filter(item => item !== undefined);

    if (getRealAnswer.length === questions.length) {
      return questions
        .map(({id, positiveAnswer}) => answers[id] === (!!positiveAnswer).toString())
        .every(item => item)
    }
    return null
  }

  onBookPatient = () => {
    const {currentPatient } = this.props;
    api.patient.bookPatient(currentPatient.id)
      .then(() => this.setState({ modalStatus: 'success'}))
      .catch(res => console.log(res))
  }

  render() {
    const { modalStatus } = this.state;
    const { currentPatient, form, onClose, questions, rules } = this.props;
    const isSuccess = modalStatus === 'success';

    return (
      <>
        <header className={styles.header}>
          <button
            onClick={() => onClose()}            
            className={styles.backLink}
          />
          <h2 className={styles.title}>Rules</h2>
        </header>
        <section className={styles.wrapper}>
          {rules.length > 0 && 
            <div className={styles.rulesWrap}>
              {rules.map(({ title, text }, index) =>
                <div className={styles.rulesItem} key={index}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              )}
            </div>
          }
          {questions.length > 0 && 
            <div className={styles.questionsWrap}>
              <h2>Survey</h2>
              {questions.map(({ title, id }, index) =>
                <div className={styles.questionItem} key={index}>
                  <p>{title}</p>
                  {form.getFieldDecorator(`${id}`, {
                    rules: [{}],
                  })(
                    <div className={styles.radioWrap}>
                        <Radio.Group>
                        <Radio value={true}>Yes</Radio>
                        <Radio value={false}>No</Radio>
                      </Radio.Group>
                    </div>
                  )}
                </div>
              )}
            </div>
          }
        </section>
        {modalStatus !== 'none' &&
          <CustomModal
            visible={true}
            className={styles.modalWrap}
          >
            <div className={styles.messageWrap}>
              <h2>{isSuccess ? 'Success!' : 'Declined'}</h2>
              <p>{`You can${isSuccess ? '' : '\'t'} visit ${currentPatient.name}`}</p>
              <img src={isSuccess ? SuccessIcon : ErrorIcon} alt={isSuccess ? 'Success' : 'Error'}/>
              <button onClick={() => onClose(isSuccess)}>Ok</button>
            </div>
          </CustomModal>
        }
      </>
    )
  }
}

const mapStateToProps = state => ({
  questions: selectQuestions(state),
  rules: selectRules(state),
});

const mapDispatchToProps = {
  getRules,
  getQuestions,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  createForm(),
)(Rules);
