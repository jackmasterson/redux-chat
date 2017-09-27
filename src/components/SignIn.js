import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateUser, updatePass, validate } from '../reducers/user';
import {Link} from 'react-router-dom';

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
        console.log('submit');
        this.props.validate(this.props.currentUser, this.props.currentPass);
        
    }
    render() {
        return (
            <div className="App">
                <input type='text' 
                    placeholder='username'
                    onChange={this.handleUserChange}/>
                <input type='text' 
                    placeholder='password'
                    onChange={this.handlePassChange}/>
                <div>Please sign in to continue</div>
                <button 
                    onClick={this.handleSubmit}>Submit</button>
            </div>
        );
    }
}

export default connect(
    (state) => ({currentUser: state.user.currentUser, currentPass: state.user.currentPass}),
    {updateUser, updatePass, validate }
)(SignIn);