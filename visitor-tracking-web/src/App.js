import React from 'react';
import { Route, Router, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';
import { Switch } from 'react-router';
import 'antd/dist/antd.css';

import { browserHistory } from './browserHistory';
import { initializeApp } from './redux/pages/Login/actions';
import {
  About,
  Home,
  Login,
  PrivateRoute,
} from './redux/pages';
import './App.css';

const App = () => (
  <Router history={browserHistory}>
    <Switch>
      <PrivateRoute exact path={['/']} component={Home} />
      <PrivateRoute exact path={['/about']} component={About} />
      <Route exact path={'/login'} component={Login} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default compose(
  connect(),
  lifecycle({
    componentDidMount() {
      this.props.dispatch(initializeApp());
    },
  }),
)(App);
