import React, {Component} from 'react';
import {connect} from 'react-redux';

class SendTo extends Component {
    render() {
        if (this.props.sendTo) {
            console.log('sendTO: ', this.props.sendTo);
            return (
                <p>Send to: {this.props.sendTo.contactName}</p>
            )
        } else {
            return (
                <p>Please select a contact to send to</p>
            )
        }
    }
}

export default connect(
    (state) => ({ sendTo: state.contact.selected })
)(SendTo);