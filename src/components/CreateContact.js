import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateCurrent, saveContact } from '../reducers/contacts';

class CreateContactForm extends Component {
    handleInputChange = (evt) => {
        const val = evt.target.value;
        this.props.updateCurrent(val);
    }
    handleSubmit = (evt) => {
        let inputs = document.getElementsByTagName('input');
        let named = inputs[0].value;
        let number = inputs[1].value;
        let contact = {
            named,
            number,
        };
        evt.preventDefault();
        this.props.saveContact(contact);
        inputs[0].value = '';
        inputs[1].value = '';
    }
    render() {
        const { currentContact, currentNumber } = this.props;
        return (
            <div>
                <input type="text"
                    onChange={this.handleInputChange}
                    placeholder={'Contact Name'} />
                <input type="text"
                    onChange={this.handleInputChange}
                    placeholder={'Contact Number'} />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
    
        )
    }
}

export default connect(
    (state) => ({currentContact: state.contact.currentContact}),
    {updateCurrent, saveContact}
)(CreateContactForm);