import React from 'react';
import { MenuItem } from '@material-ui/core';
import { Link } from 'react-router-dom';

import classes from './Dropdown.module.css'
const DropdownItem = (props) => {
  return (
    <div>
      <MenuItem>
        <Link to={props.to} className={classes.Link}>{props.children}</Link>
      </MenuItem>
    </div>
  );
};

export default DropdownItem;
