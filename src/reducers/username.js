export default function(state = null, action = {}) {
    switch (action.type) {
        case 'JWT':
            return action.username;
        default:
            return state;
    }
}
