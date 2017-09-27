import React, {Component} from 'react';
import {connect} from 'react-redux';

class SendTo extends Component {
    render() {
        if (this.props.sendTo) {
            return (
                <p>Send to: {this.props.sendTo.named}</p>
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