import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';

export default (props) => (
    <div className='footer'>
        <Button>
            <Link className="link" to='/keyboard'>Keyboard</Link>
        </Button>
        <Button>
            <Link className="link" to='/contacts'>Send To</Link>
        </Button>
        <Button>
            <Link className="link" to='/create-contact'>Create Contact</Link>
        </Button>
        <Button>
            <Link className="link send" to='/confirm'>Confirm and Send Message</Link>
        </Button>
        <Button>
            <Link className="link signout" to='/sign-out'>Sign Out</Link>
        </Button>
    </div>
);