import {REACT_APP_USER_DB} from '../api/api';

export const checkDB = (user, pass, callback) => {
    console.log('db url: ', REACT_APP_USER_DB + user);
    return fetch(REACT_APP_USER_DB + user)
        .then(res => res.json());
}

