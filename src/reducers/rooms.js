export default function(state = [], action = {}) {
    switch (action.type) {
        case 'SET_ROOMS':
            return action.payload.sort(function(a, b) {
                return a.id - b.id;
            });
        default:
            return state;
    }
}
