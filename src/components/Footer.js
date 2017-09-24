import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
    <div className='footer'>
        <Link className="link" to='/'>Home</Link>
        <Link className="link" to='/new-contact'>New Contact</Link>
        <Link className="link" to='/send-to'>Send To</Link>
    </div>
);