export default function(state = null, action = {}) {
    switch (action.type) {
        case 'SELECT_ROOM':
            return action.payload;
        default:
            return state;
    }
}
