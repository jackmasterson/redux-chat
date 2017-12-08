import io from 'socket.io-client';

const baseURL = process.env.REACT_APP_BASE_URL;

export const retrieveContacts = (callback) => {
    const socket = io();
    socket.open();
    socket.on('connect', () => {
        console.log('socket open for contacts');
        socket.emit('contacts', { user: window.username });
        socket.on('contacts-retrieved', (res) => {
            callback(res);
        });
    });

}
export const createContact = (number, contact, callback) => {
    const socket = io();
    socket.open();
    socket.on('connect', () => {
        console.log('creating contact socket');
        let user = window.username;
        socket.emit('contact-upload', {user, number, contact});
        socket.on('contact-uploaded', (res) => {
            console.log('contact uploaded successfully');
            callback();
        })
    })
    // return fetch(baseURL, {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify( { number: number, contact: contact }),
    // })
    // .then(res => res.json());
}