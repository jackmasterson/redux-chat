import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
    <div className='footer'>
        <Link className="link" to='/keyboard'>Keyboard</Link>
        <Link className="link" to='/contacts'>Contact</Link>
        <Link className="link" to='/create-contact'>Add Contact</Link>
        <Link className="link send" to='/confirm'>Confirm and Send Message</Link>
    </div>
);