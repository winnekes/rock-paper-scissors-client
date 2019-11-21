export default function(state = null, action = {}) {
    switch (action.type) {
        case 'JWT':
            return action.username;
        case 'LOGOUT':
            return null;
        default:
            return state;
    }
}
