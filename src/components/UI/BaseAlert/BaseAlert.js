import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

import Alert from '@material-ui/lab/Alert';

import classes from './BaseAlert.module.css'
const BaseAlert = (props) => {
  return (
    <div className={classes.Alert}>
      {props.showAlert && (
        <Alert onClose={() => props.onAlertClosed()} severity={props.severity}>
          {props.message}
        </Alert>
      )}
    </div>
  );
};

const mapPropsToState = (state) => {
  return {
    severity: state.global.severity,
    message: state.global.alertMessage,
    showAlert: state.global.showAlert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAlertClosed: () => dispatch(actions.closeAlert()),
  };
};

export default connect(mapPropsToState, mapDispatchToProps)(BaseAlert);
