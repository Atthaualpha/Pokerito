import {combineReducers} from 'redux'

import globalReducer from '../reducers/global/global';
import authReducer from '../reducers/auth/auth';

const rootReducer = combineReducers({
    global: globalReducer,
    auth: authReducer
})

export default rootReducer;