import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../store/actions/index';
import Modal from '../../components/UI/Modal/Modal';
const NewRoom = () => {
  const isOpen = useSelector((state) => state.room.isOpenModalNewRoom);
  const dispatch = useDispatch();

  return (
    <Modal
      isOpen={isOpen}
      btnActionText="Create Room"
      showActions
      onClose={() => dispatch(actions.closeModalCreateRoom())}
    >
      New Room
    </Modal>
  );
};

export default NewRoom;
