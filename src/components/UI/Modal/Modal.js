import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Button from '../BaseButton/BaseButton';

const Modal = (props) => {

  let buttonActions = null;
  if(props.showActions) {
    buttonActions = ( <DialogActions>
        <Button color="danger" clicked={props.onClose}>
          Cancel
        </Button>
        <Button type="submit" clicked={props.btnAction}>
          {props.btnActionText}
        </Button>
      </DialogActions>)
  }
  return (
    <Dialog open={props.isOpen} fullWidth maxWidth={props.modalSize} onClose={props.onClose}>
      <DialogTitle>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{props.headText}</DialogContentText>
        {props.children}
      </DialogContent>
        {buttonActions}
    </Dialog>
  );
};

export default Modal;
