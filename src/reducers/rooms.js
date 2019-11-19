import { SET_ROOMS, ADD_ROOM } from '../actions/rooms';

export default function(state = [], action = {}) {
    switch (action.type) {
        case SET_ROOMS:
            return action.payload;
        case ADD_ROOM:
            return [...state, action.payload];
        default:
            return state;
    }
}
