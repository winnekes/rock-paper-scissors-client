import request from 'superagent';
const baseUrl = 'https://mygame-server.herokuapp.com';

export const JWT = 'JWT';

export const signUp = (username, password) => dispatch => {
    request
        .post(`${baseUrl}/user`)
        .send({ username, password })
        .then(response => console.log(response))
        .catch(err => console.log(err));
};

function jwt(payload, username) {
    return {
        type: JWT,
        payload,
        username,
    };
}

export const login = (username, password) => dispatch => {
    request
        .post(`${baseUrl}/login`)
        .send({ username, password })
        .then(response => {
            const action = jwt(response.body.jwt, username);
            dispatch(action);
        })

        .catch(err => console.log(err));
};
