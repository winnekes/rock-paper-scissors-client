import { combineReducers } from 'redux';
import user from './user';
import rooms from './rooms';
import username from './username';
import error from './error';

export default combineReducers({
    user,
    rooms,
    username,
    error
});
