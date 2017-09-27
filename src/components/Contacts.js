import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchContacts, selectContact } from '../reducers/contacts.js';

const Contact = ({number, named, selectContact}) => (
    <li className="inline"
        onClick={() => selectContact(number)}>
        {number.named}
    </li>
);

class Contacts extends Component {
    componentDidMount = () => {
       this.props.fetchContacts();
    }
    render() {
        console.log(this.props);
        return (
            <ul>
                {this.props.contacts.map(contact =>
                    <Contact
                        selectContact={this.props.selectContact} 
                        key={contact.number.number} {...contact} />
                )}
            </ul>
        )
    }
}

export default connect(
    (state) => ({ contacts: state.contact.contacts, selected: state}),
    {fetchContacts, selectContact}
)(Contacts);