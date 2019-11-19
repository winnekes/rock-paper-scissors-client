import { combineReducers } from 'redux';
import user from './user';
import rooms from './rooms';
import room from './room';

export default combineReducers({
    user,
    rooms,
    room,
});
