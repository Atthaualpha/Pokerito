import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../../../store/actions/index';

import Dialog from '@material-ui/core/Dialog';
import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Button from '../BaseButton/BaseButton';

const Modal = (props) => {
  const dispatch = useDispatch();
  const modalStatus = useSelector((state) => state.global.modalStatus);

  let buttonActions = null;
  if(props.showActions) {
    buttonActions = ( <DialogActions>
        <Button color="danger" clickled={() => dispatch(closeModal)}>
          Cancel
        </Button>
        <Button type="submit" clickled={props.btnAction}>
          {props.btnActionText}
        </Button>
      </DialogActions>)
  }
  return (
    <Dialog open={modalStatus} fullWidth maxWidth={props.modalSize} onClose={() => dispatch(closeModal())}>
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
