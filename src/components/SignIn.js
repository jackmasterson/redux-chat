import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateUser, updatePass, validate } from '../reducers/user';
import { Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';

class SignIn extends Component {

    handleUserChange = (evt) => {
        const val = evt.target.value;
        this.props.updateUser(val);
    }
    handlePassChange = (evt) => {
        const val = evt.target.value;
        this.props.updatePass(val);
    }
    handleSubmit = () => {
        console.log(this.props);
        this.props.validate(this.props.currentUser, this.props.currentPass);
    }
    render() {
        console.log(this.props);
        if (this.props.authed && this.props.authed === true) {
            return (
                <App />
            )
        } else {
            return (
                <div className="App">
                    <input type='text'
                        placeholder='username'
                        onChange={this.handleUserChange} />
                    <input type='text'
                        placeholder='password'
                        onChange={this.handlePassChange} />
                    <div>Please sign in to continue</div>
                    <button
                        onClick={this.handleSubmit}>Submit</button>
                </div>
            );
        }
    }
}

export default connect(
    (state) => ({authed: state.user.authed, currentUser: state.user.currentUser, currentPass: state.user.currentPass}),
    {updateUser, updatePass, validate }
)(SignIn);