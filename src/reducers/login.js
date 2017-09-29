import { combineReducers } from 'redux';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const requestLogin = (creds) => ({ 
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds, 
});

export const receivingLogin = (user) => ({
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: user.id_token
});

export const loginError = (message) => ({
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
});

export const requestLogout = () => ({ 
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true,
});

export const receiveLogout = () => ({
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
});

export const logoutUser = () => {
    return (dispatch) => {
        dispatch(requestLogout());
        localStorage.removeItem('id_token');
        localStorage.removeItem('access_token');
        dispatch(receiveLogout());
    }
}

export const loginUser = (creds) => {
    let config = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `username=${creds.username}&password=${creds.password}`;
    }

    return (dispatch) => {
        dispatch(requestLogin(creds));
        return fetch('http://localhost:3001/sessions/create', config)
            .then(res => 
                res.json()
                .then(user => ({ user, response })))
                .then(( {user, response }) => {
                    if (!response.ok) {
                        console.log('error occurred');
                        dispatch(loginError(user.message));
                        return Promise.reject(user);
                    } else {
                        localStorage.setItem('id_token', user.id_token);
                        localStorage.setItem('id_token', user.access_token);
                        dispatch(receiveLogin(user));
                    }
                })
                .catch(err => console.log('Error: ', err));
    }
}

const auth = (state = {
    isFetching: false,
    isAuthenticated: localStorage.getItem('id_token') ? true : false
}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
                user: action.creds,
            });
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: true,
                errorMessage: '',
            });
        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.message,
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                isAuthenticated: false,
            });
        default:
            return state;
    }
}

export default auth;