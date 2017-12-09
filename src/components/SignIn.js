import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateUser, updatePass, validate } from '../reducers/user';
import { Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import Alphabet from './Alphabet';

class SignIn extends Component {
    handleSubmit = () => {
        let username = document.querySelector('.user').value;
        let password = document.querySelector('.pass').value;
        this.props.validate(username, password);
    }
    render() {
        if (sessionStorage.getItem('authed')) {
            return (
                <App />
            )
        } else {
            return (
                <div>
                <div className="App">
                    <input type='text'
                        placeholder='username'
                        className='user'/>
                    <input type='text'
                        placeholder='password'
                        className='pass'/>
                    <div>Please sign in to continue</div>
                    <button
                        onClick={this.handleSubmit}>Submit</button>
                </div>
                <Alphabet />
                </div>
            );
        }
    }
}

export default connect(
    (state) => ({authed: state.user.authed, currentUser: state.user.currentUser, currentPass: state.user.currentPass}),
    {updateUser, updatePass, validate }
)(SignIn);