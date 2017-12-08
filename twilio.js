module.exports = (function(info) {
    console.log('twilio info is: ', info);
    const twilio = require('twilio');
    const dotenv = require('dotenv').config();
    const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
    const authToken = process.env.TWILIO_AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console
    const client = new twilio(accountSid, authToken);

    let body = info.info.message;
    let to = info.info.number;
    let from = process.env.TWILIO_ACCOUNT_FROM;
    
    client.messages.create({
        body: body,
        to: to,  // Text this number
        from: from // From a valid Twilio number
    })
});


// .then((message) => console.log(message.sid));