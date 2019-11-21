import request from 'superagent';

import { baseUrl } from '../constants';

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
