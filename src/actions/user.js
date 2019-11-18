import request from 'superagent';

const baseUrl = 'http://mygame-server.herokuapp.com';

export const signUp = (email, username, password) => dispatch => {
    request
        .post(`${baseUrl}/user`)
        .send({ email, username, password })
        .then(response => console.log(response));
};

export const JWT = 'JWT';

function jwt(payload) {
    return {
        type: JWT,
        payload,
    };
}

export const login = (email, password) => dispatch => {
    request
        .post(`${baseUrl}/login`)
        .send({ email, password })
        .then(response => {
            const action = jwt(response.body.jwt);

            dispatch(action);
        });
};
