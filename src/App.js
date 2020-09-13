import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as authAction from './store/actions/auth/auth';
import Router from './components/Router/Router';
import Layout from './HOC/Layout/Layout';

const App = (props) => {
  useEffect(() => {
     props.onTryLogin(props.isAuthenticated);
  });

  return (
    <Layout>
      <Router isAuthenticated={props.isAuthenticated} />
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryLogin: (isAuthenticated) => dispatch(authAction.checkSession(isAuthenticated))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
