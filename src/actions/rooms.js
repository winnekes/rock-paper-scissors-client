import request from 'superagent';

export const SET_ROOMS = 'SET_ROOMS';
export const ADD_ROOM = 'ADD_ROOM';

const baseUrl = 'https://mygame-server.herokuapp.com';

export const setRooms = payload => {
    return {
        type: SET_ROOMS,
        payload,
    };
};

export const addRoom = payload => {
    return {
        type: ADD_ROOM,
        payload,
    };
};

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
