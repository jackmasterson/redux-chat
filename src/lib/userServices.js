import {statusBack} from '../reducers/user';

const dbURL = process.env.REACT_APP_USER_DB;

export const checkDB = (user, pass, callback) => {
    return fetch(dbURL + user)
        .then(res => res.json());
}

