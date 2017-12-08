 import io from 'socket.io-client';

 export const sendThisMessage = (info, callback) => {
     const socket = io();
     socket.open();
     socket.on('connect', () => {
         socket.emit('send-message', {info})
     });
 }