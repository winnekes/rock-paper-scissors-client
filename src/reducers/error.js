

export default function(state = null, action = {}) {
    switch (action.type) {
        case 'SET_ERROR_MESSAGE':
            return action.error;
        case 'CLEAR_ERROR_MESSAGE':
            return null;
        default:
            return state;
    }
}
