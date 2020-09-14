import React, { useState } from 'react';
import { MenuList, Paper, Popper, ClickAwayListener } from '@material-ui/core';

import BaseButton from '../BaseButton/BaseButton';

import classes from './Dropdown.module.css';
const Dropdown = (props) => {
  const anchorRef = React.useRef(null);
  const [open, setOpen] = useState(false);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <BaseButton endIcon={props.endIcon} buttonRef={anchorRef} clicked={() => setOpen(!open)}>
          {props.text}
        </BaseButton>

        <Popper open={open} anchorEl={anchorRef.current} role={undefined} className={classes.Dropdown}>
          <Paper className={classes.Menu} variant="outlined">
            <MenuList onClick={() => setOpen(false)}>{props.children}</MenuList>
          </Paper>
        </Popper>
      </div>
    </ClickAwayListener>
  );
};

export default Dropdown;
