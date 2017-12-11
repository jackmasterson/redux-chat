import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';

class SignOut extends Component {
    signOut() {
        console.log('user will be signed out!');
        sessionStorage.removeItem('authed');
        location.reload();
    }
    render() {
        return (
            <Button
                bsSize="large"
                bsStyle="danger"
                onClick={() => this.signOut()}>
                Sign Out Now
            </Button>
        );
    }
}

export default connect(
    (state) => (state)
)(SignOut);