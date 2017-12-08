import {createContact, retrieveContacts} from '../lib/contactServices';

const initContacts = {
    "contacts": [],
}

export const CONTACT_ADD = 'CONTACT_ADD';
export const CONTACT_RETRIEVED = 'CONTACT_RETRIEVED';
export const CONTACT_SELECTED = 'CONTACT_SELECTED';

const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (val) => ({ type: CURRENT_UPDATE, payload: val });
export const addContact = (contact) => ({ type: CONTACT_ADD, payload: contact });
export const loadContacts = (contacts) => ({ type: CONTACT_RETRIEVED, payload: contacts });
export const contactSelected = (contact) => ({ type: CONTACT_SELECTED, payload: contact });

export const selectContact = (contact, props) => {
    return (dispatch) => {
        dispatch(contactSelected(contact))
    }
}
export const fetchContacts = () => {
    return (dispatch) => {
        const callback = function(res) {
            dispatch(loadContacts(res));
        }
        retrieveContacts(callback);
    }
}

export const saveContact = (contact) => {
    return (dispatch) => {
        const callback = function(res) {
            console.log('calling back from client for contact js');
        }
        createContact(contact, callback)
    }
}

export default (state = initContacts, action) => {
    switch (action.type) {
        case CONTACT_ADD:
            return {...state, currentContact: action.payload}
        case CONTACT_RETRIEVED:
            return {...state, contacts: action.payload}   
        case CONTACT_SELECTED:
            return {...state, selected: action.payload} 
        default:
            return state;
    }
};