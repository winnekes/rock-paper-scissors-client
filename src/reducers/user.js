import { JWT } from '../actions/user';

export default function(state = '', action = {}) {
    switch (action.type) {
        case JWT:
            return action.payload;
        case 'LOGOUT':
            return '';
        default:
            return state;
    }
}
