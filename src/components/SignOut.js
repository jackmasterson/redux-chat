import React, { Component } from 'react';
import {connect} from 'react-redux';

class SignOut extends Component {
    signOut() {
        console.log('user will be signed out!');
        sessionStorage.removeItem('authed');
        location.reload();
    }
    render() {
        return (
            <button
                onClick={() => this.signOut()}>
                <h1>Sign Out Now</h1>
            </button>
        );
    }
}

export default connect(
    (state) => (state)
)(SignOut);