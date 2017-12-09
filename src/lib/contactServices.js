import io from 'socket.io-client';

export const retrieveContacts = (callback) => {
    const socket = io();
    socket.open();
    socket.on('connect', () => {
        socket.emit('contacts', { user: window.username });
        socket.on('contacts-retrieved', (res) => {
            if (res) {
                callback(res);
            } else {
                sessionStorage.removeItem('authed');
            }
        });
    });

}
export const createContact = (number, contact, callback) => {
    const socket = io();
    socket.open();
    socket.on('connect', () => {
        let user = window.username;
        socket.emit('contact-upload', {user, number, contact});
        socket.on('contact-uploaded', (res) => {
            callback();
        })
    });
}