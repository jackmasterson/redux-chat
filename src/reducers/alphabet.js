
const initState = {
    letters: [{ val: 'a', keyVal: 1 },
                { val: 'b', keyVal: 2 },
                { val: 'c', keyVal: 3 },
                { val: 'd', keyVal: 4 },
                { val: 'e', keyVal: 5 },
                { val: 'f', keyVal: 6 },
                { val: 'g', keyVal: 7 },
                { val: 'h', keyVal: 8 },
                { val: 'i', keyVal: 9 },
                { val: 'j', keyVal: 10 },
                { val: 'k', keyVal: 11 },
                { val: 'l', keyVal: 12 },
                { val: 'm', keyVal: 13 },
                { val: 'n', keyVal: 14 },
                { val: 'o', keyVal: 15 },
                { val: 'p', keyVal: 16 },
                { val: 'q', keyVal: 17 },
                { val: 'r', keyVal: 18 },
                { val: 's', keyVal: 19 },
                { val: 't', keyVal: 20 },
                { val: 'u', keyVal: 21 },
                { val: 'v', keyVal: 22 },
                { val: 'w', keyVal: 23 },
                { val: 'x', keyVal: 24 },
                { val: 'y', keyVal: 25 },
                { val: 'z', keyVal: 26 },
                { val: ' ', keyVal: 27 }],
    specials: [{ val: 'backspace', keyVal: 28 }],
    autos: [
        { val: 'hey', keyVal: 29},
        { val: 'what\'s up', keyVal: 30 },
        { val: 'want to hang out', keyVal: 31 },
        { val: 'they', keyVal: 32 },
        { val: 'she', keyVal: 33 },
        { val: 'he', keyVal: 34 },
        { val: 'you', keyVal: 35 },
        { val: 'your', keyVal: 36 },
        { val: 'you\'re', keyVal: 37 },
    ],
    currentMessage: '',
};

export const LETTER_ADD = 'LETTER_ADD';
export const LETTER_REMOVE = 'LETTER_REMOVE';
export const DISPLAY_MESSAGE = 'DISPLAY_MESSAGE';
export const AUTO_ADD = 'AUTO_ADD';

export const addToMessage = (letter) => ({ type: LETTER_ADD, payload: letter });
export const getLetters = () => (initState.letters);
export const getSpecials = () => (initState.specials);
export const getAutos = (message) => {
    let autoMatches = [];
    let mess = message.split(' ');
    for (let auto of initState.autos) {
        if(auto.val.indexOf(mess[mess.length - 1]) > -1 ){
            autoMatches.push(auto);
        }
    }
    autoMatches.length = 5;
    return autoMatches;
};
export const backspace = (value) => ({ type: LETTER_REMOVE, payload: value });
export const displayMessage = () => ({ type: DISPLAY_MESSAGE, payload: initState});
export const autoAdd = (value) => ({ type: AUTO_ADD, payload: value });

export const initiateAddition = (datas) => {
    return (dispatch) => {
        dispatch(addToMessage(datas));
    }
}

export const initiateBackspace = (datas) => {
    return (dispatch) => {
        dispatch(backspace(datas));
    }
}

export const initiateAutofill = (datas) => {
    return (dispatch) => {
        dispatch(autoAdd(datas));
    }
}

const formatMessage = (message, payload) => {
    let mess = message.split(' ');
    if (mess[mess.length - 1] === ' ') {
        return message + ' ' + payload + ' ';
    }
    
    mess.pop();
    message = mess.join(' ');

    return message + ' ' + payload + ' ';
}
export default (state = initState, action) => {
    switch (action.type) {
        case LETTER_ADD:
            return {...state, currentMessage: state.currentMessage + action.payload}
        case LETTER_REMOVE:
            return {...state, currentMessage: state.currentMessage.slice(0, -1)}    
        case AUTO_ADD:
            return {...state, currentMessage: formatMessage(state.currentMessage, action.payload)}
        default:
            return state;
    }
};