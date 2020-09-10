import React from 'react';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import classes from './Button.module.css'

const BaseButton = (props) => {
  let boxType = 'contained';

  let colorLevel = '';
  switch (props.color) {
    case 'danger':
      colorLevel = 'secondary';
      break;
    case 'blank':
      colorLevel = 'default';
      break;
    default:
      colorLevel = 'primary';
  }

  if (props.outlined) {
    boxType = 'outlined';
  }

  if (props.unborder) {
    boxType = 'text';
  }

  const button = (
    <Button
      type={props.type}
      className={classes.Button}
      onClick={props.clicked}
      color={colorLevel}
      disabled={props.disabled}
      variant={boxType}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
    >
      {props.children}
    </Button>
  );

  return props.isLink ? <Link className={classes.Link} to={props.to}>{button}</Link> : button;
};

export default BaseButton;
