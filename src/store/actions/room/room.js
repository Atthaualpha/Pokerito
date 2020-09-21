import * as actionTypes from './actionTypes'

export const openModalCreateRoom = () => {
    return {
        type: actionTypes.OPEN_MODAL_NEW_ROOM
    }
}

export const closeModalCreateRoom = () => {
    return {
        type: actionTypes.CLOSE_MODAL_NEW_ROOM
    }
}