import React, { PureComponent } from 'react';
import { createForm } from 'rc-form';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import {clearAuthFail, loginUser} from './actions';
import styles from './Login.module.scss';
import {selectAuthError} from "./selectors";
import Logo from "../../../images/logo.svg";

class Login extends PureComponent {

  login = e => {
    const { form, loginUser } = this.props;
    e.preventDefault();
    form.validateFields(err => {
      if (!err) {
        loginUser(form.getFieldsValue());
      }
    });
  };

  onInputChange = () => {
    const { errorData, clearAuthFail  } = this.props;
    if (errorData !== null ) {
      clearAuthFail();
    }
  }

  render() {
    const { form, errorData } = this.props;

    return (
      <section className={styles.wrapper}>
        <form className={styles.form} onSubmit={this.login}>
          <img className={styles.logoImg} src={Logo} alt="Logo"/>
          <p className={styles.inputTitle}>Username</p>
          {form.getFieldDecorator('username', {
            initialValue: '',
          })(
            <input 
              className={styles.basicInput}
              onChange={this.onInputChange}
              placeholder="Username" 
              type="text"
            />
          )}
          <p className={styles.inputTitle}>Password</p>
          {form.getFieldDecorator('password', {
            initialValue: '',
          })(
            <input 
              className={styles.basicInput}
              onChange={this.onInputChange}
              placeholder="Password"
              type="password"
            />
          )}
          {errorData &&
            <p className={styles.errorText}>Wrong Username or Password</p>
          }
          <button className={styles.loginBtn}>Log In</button>
        </form>
      </section>
    );
  }
}

const mapDispatchToProps = {
  loginUser,
  clearAuthFail,
};

const mapStateToProps = state => ({
  errorData: selectAuthError(state),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  createForm(),
)(Login);
