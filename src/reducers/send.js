import {sendThisMessage} from '../lib/sendServices';

export const MESSAGE_PROCESSING = 'MESSAGE_PROCESSING';

export const sendMessage = (val) => ({ type: MESSAGE_PROCESSING, payload: val });

export const messageSend = (contact, number, message) => {
    let info = {
        contact: contact,
        message: message,
        number: number,
    };
    return (dispatch) => {
        sendThisMessage(info);
        dispatch(sendMessage(info));
    }
}

export default (state, action) => {
    switch (action.type) {
        case MESSAGE_PROCESSING:
            return {...state, messageInfo: action.payload}
        default:
            return state;
    }
}