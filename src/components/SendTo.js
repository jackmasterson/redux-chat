import React, {Component} from 'react';
import {connect} from 'react-redux';

class SendTo extends Component {
    render() {
        if (this.props.sendTo) {
            return (
                <p className="send-to">Send to: {this.props.sendTo.contactName}</p>
            )
        } else {
            return (
                <p className="send-to">Please select a contact to send to</p>
            )
        }
    }
}

export default connect(
    (state) => ({ sendTo: state.contact.selected })
)(SendTo);