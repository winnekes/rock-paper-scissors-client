import request from 'superagent';

export const SELECT_ROOM = 'SELECT_ROOM';

const baseUrl = 'http://localhost:4000';

export const createRoom = name => (dispatch, getState) => {
    const state = getState();
    const { user } = state;

    request
        .post(`${baseUrl}/room`)
        .set('Authorization', `Bearer ${user}`)
        .send({ name: name })
        .then(response => console.log(response))
        .catch(console.error);
};

export const joinRoom = name => (dispatch, getState) => {
    console.log(name);
    const state = getState();
    const { user } = state;

    request
        .get(`${baseUrl}/room/${name}/join`)
        .set('Authorization', `Bearer ${user}`)
        .then(response => console.log(response));
};

export const selectRoom = name => (dispatch, getState) => {
    const state = getState();
    const { user } = state;

    request
        .get(`${baseUrl}/room/${name}`)
        .set('Authorization', `Bearer ${user}`)
        .then(response => console.log(response));
};
