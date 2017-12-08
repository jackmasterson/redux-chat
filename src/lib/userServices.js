import io from 'socket.io-client';

export const checkDB = (user, pass, callback) => {
    const socket = io();
    socket.open();
    socket.on('connect', () => {
        console.log('socket open');
        socket.emit('opened', { user: user, pass: pass });
        socket.on('exists', () => {
            console.log('user exists!');
            window.username = user;
            callback(true);
        })

    });


}

