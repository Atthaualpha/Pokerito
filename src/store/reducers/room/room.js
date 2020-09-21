import * as actionTypes from '../../actions/actionTypes';
import { updatedState } from '../../../utils/utils';
const initialState = {
  isOpenModalNewRoom: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.OPEN_MODAL_NEW_ROOM:
      return updatedState(state, { isOpenModalNewRoom: true });
    case actionTypes.CLOSE_MODAL_NEW_ROOM:
      return updatedState(state, { isOpenModalNewRoom: false });

    default:
      return state;
  }
};
