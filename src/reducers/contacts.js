import {createContact, retrieveContacts} from '../lib/contactServices';

const initContacts = {
    "contacts": [],
}

export const CONTACT_ADD = 'CONTACT_ADD';
export const CONTACT_RETRIEVED = 'CONTACT_RETRIEVED';

const CURRENT_UPDATE = 'CURRENT_UPDATE';

export const updateCurrent = (val) => ({ type: CURRENT_UPDATE, payload: val });
export const addContact = (contact) => ({ type: CONTACT_ADD, payload: contact });
export const loadContacts = (contacts) => ({ type: CONTACT_RETRIEVED, payload: contacts });

export const fetchContacts = () => {
    return (dispatch) => {
        retrieveContacts()
            .then(contacts => dispatch(loadContacts(contacts)))
    }
}

export const saveContact = (contact) => {
    console.log(contact);
    return (dispatch) => {
        createContact(contact)
            .then(res => dispatch(addContact(res)))
    }
}

export default (state = initContacts, action) => {
    switch (action.type) {
        case CONTACT_ADD:
            return {...state, currentContact: action.payload}
        case CONTACT_RETRIEVED:
            return {...state, contacts: action.payload}    
        default:
            return state;
    }
};