import {combineReducers} from 'redux'

import globalReducer from './global/global';
import authReducer from './auth/auth';
import roomReducer from './room/room'

const rootReducer = combineReducers({
    global: globalReducer,
    auth: authReducer,
    room: roomReducer
})

export default rootReducer;