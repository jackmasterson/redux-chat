import React, {Component} from 'react';
import {connect} from 'react-redux';
import { fetchContacts } from '../reducers/contacts.js';

const Contact = ({number, named}) => (
    <li className="inline">
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
                    <Contact key={contact.number} {...contact} />
                )}
            </ul>
        )
    }
}

export default connect(
    (state) => ({ contacts: state.contact.contacts}),
    {fetchContacts}
)(Contacts);