import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateUser, updatePass, validate } from '../reducers/user';
import { Redirect } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../App';
import Alphabet from './Alphabet';
import {Button} from 'react-bootstrap';

class SignIn extends Component {
    handleSubmit = () => {
        let username = document.querySelector('.user').value;
        let password = document.querySelector('.pass').value;
        this.props.validate(username, password);
    }
    render() {
        if (sessionStorage.getItem('authed') === 'true') {
            return (
                <App />
            )
        } else if ((sessionStorage.getItem('authed') === 'false') && (sessionStorage.getItem('newUser'))) {
            return (
                <div>
                    <div>It looks like you're a new user. Welcome! Please sign in again below to continue</div>
                    <div>
                        <div className="App">
                            <input type='text'
                                placeholder='username'
                                className='user signin' />
                            <input type='text'
                                placeholder='password'
                                className='pass singin' />
                            <div>Please sign in to continue</div>
                            <Button
                                bsStyle="success"
                                className="signin"
                                onClick={this.handleSubmit}>Submit</Button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className="App">
                        <input 
                            type='text'
                            placeholder='username'
                            className='user signin'/>
                        <input 
                            type='text'
                            placeholder='password'
                            className='pass signin'/>
                        <div>Please sign in to continue</div>
                        <Button
                            bsStyle="success"
                            className="signin"
                            onClick={this.handleSubmit}>Submit</Button>
                    </div>
                </div>
            );
        }
    }
}

export default connect(
    (state) => ({authed: state.user.authed, currentUser: state.user.currentUser, currentPass: state.user.currentPass}),
    {updateUser, updatePass, validate }
)(SignIn);