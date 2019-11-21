import { combineReducers } from 'redux';
import user from './user';
import rooms from './rooms';
import username from './username';

export default combineReducers({
    user,
    rooms,
    username,
});
