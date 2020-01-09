import request from 'superagent';

import { baseUrl } from '../constants';
export const JWT = 'JWT';

function jwt(payload, username) {
    return {
        type: JWT,
        payload,
        username,
    };
}

function setErrorMessage(payload) {
    return {
        type: 'SET_ERROR_MESSAGE',
        error: payload,
    };
}

export function clearErrorMessage() {
    return {
        type: 'CLEAR_ERROR_MESSAGE',
    };
}

export const signUp = (username, password) => dispatch => {
    request
        .post(`${baseUrl}/user`)
        .send({ username, password })
        .then(response => dispatch(clearErrorMessage()))
        .catch(err => {
            const action = setErrorMessage(
                JSON.parse(err.response.text).message
            );
            dispatch(action);
        });
};

export const login = (username, password) => dispatch => {
    request
        .post(`${baseUrl}/login`)
        .send({ username, password })
        .then(response => {
            const action = jwt(response.body.jwt, username);
            dispatch(action);
            dispatch(clearErrorMessage());
        })

        .catch(err => {
            const action = setErrorMessage(
                JSON.parse(err.response.text).message
            );
            dispatch(action);
        });
};

export const logout = () => ({
    type: 'LOGOUT',
});
