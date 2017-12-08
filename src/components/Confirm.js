import React, {Component} from 'react';
import {connect} from 'react-redux';
import {messageSend} from '../reducers/send';

class Confirm extends Component {
    sendMessage() {
        let contact = this.props.messageInfo.contact.selected.contactName;
        let number = this.props.messageInfo.contact.selected.contactNumber;
        let message = document.querySelectorAll('.message')[1].innerHTML
        this.props.messageSend(contact, number, message);
    }
    render() {
        return (
            <button onClick={() => this.sendMessage()}>Send Message</button>
        );
    }
}

export default connect(
    (state) => ({ messageInfo: state }),
    {messageSend}
)(Confirm);