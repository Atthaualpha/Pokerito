import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

import classes from './Layout.module.css';
import BaseAlert from '../../components/UI/BaseAlert/BaseAlert';
import NewRoom from '../../containers/NewRoom/NewRoom';
const Layout = (props) => {
  return (
    <div className={classes.Layout}>
      <Header username={props.username} isLoading={props.isLoading} isAuthenticated={props.isAuthenticated} />
      <main className={classes.Main}>
        <BaseAlert />
        {props.children}
        <NewRoom/>
      </main>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.global.loading,
    isAuthenticated: state.auth.isAuthenticated,
    username: state.auth.username,
  };
};

export default connect(mapStateToProps, null)(Layout);
