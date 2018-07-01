import {combineReducers} from 'redux';
import authReducer from './auth.js';

const rootReducer = combineReducers({
  auth: authReducer
});

export default rootReducer;
