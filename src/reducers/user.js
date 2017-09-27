import {checkDB} from '../lib/userServices';

const USER_UPDATE = 'USER_UPDATE';
const PASS_UPDATE = 'PASS_UPDATE';
export const USER_STATUS = 'USER_STATUS';

export const updateUser = (val) => ({ type: USER_UPDATE, payload: val });
export const updatePass = (val) => ({ type: PASS_UPDATE, payload: val });
export const verified = (response) => ({ type: USER_STATUS, payload: response })

export const validate = (user, pass) => {
    return (dispatch) => {
        checkDB(user, pass)
            .then(res => {
                console.log(res);
                console.log(res.pass);
                console.log(pass);
                if (pass) {
                    console.log("made it ");
                    if (res.pass === pass) {
                        console.log('here');
                        dispatch(verified(true))
                    } else {
                        console.log("here though");
                        dispatch(verified(false))
                    }
                }
            });
    }
};

export default (state, action) => {
    switch (action.type) {
        case USER_UPDATE:
            return { ...state, currentUser: action.payload }
        case PASS_UPDATE:
            return { ...state, currentPass: action.payload }
        case USER_STATUS:
            return { ...state, authed: action.payload }    
        default:
            return {...state}
    }
}
