import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
    <div className='footer'>
        <Link className="link" to='/keyboard'>Keyboard</Link>
        <Link className="link" to='/contacts'>Contacts</Link>
        <Link className="link" to='/create-contact'>Add Contact</Link>
    </div>
);