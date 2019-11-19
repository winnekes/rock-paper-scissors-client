import request from 'superagent';
const baseUrl = 'http://localhost:4000';

export const JWT = 'JWT';

export const signUp = (username, password) => dispatch => {
    request
        .post(`${baseUrl}/user`)
        .send({ username, password })
        .then(response => console.log(response))
        .catch(err => console.log(err));
};

function jwt(payload) {
    return {
        type: JWT,
        payload,
    };
}

export const login = (username, password) => dispatch => {
    request
        .post(`${baseUrl}/login`)
        .send({ username, password })
        .then(response => {
            const action = jwt(response.body.jwt);
            dispatch(action);
        })

        .catch(err => console.log(err));
};
