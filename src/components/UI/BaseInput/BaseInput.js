import React from 'react';

import TextField from '@material-ui/core/TextField';

import classes from './Input.module.css';

const BaseInput = (props) => {
  return (
    <TextField
      className={classes.FormInput}
      {...props}
      FormHelperTextProps={{ className: classes.Label }}
      error={props.errors[props.name] && true}
      InputLabelProps={{ className: classes.Label }}
      helperText={props.errors[props.name] && props.errors[props.name].message}
    ></TextField>
  );
};

export default BaseInput;
