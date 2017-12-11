import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Message from './components/Message';
import Footer from './components/Footer';
import Alphabet from './components/Alphabet';
import Contacts from './components/Contacts';
import CreateContactForm from './components/CreateContact';
import SendTo from './components/SendTo';
import SignIn from './components/SignIn';
import Confirm from './components/Confirm';
import SignOut from './components/SignOut';
import { Redirect } from 'react-router';

class App extends Component {
  render() {
      return (
        <div className="App">
          <div className="message">
            <Message />
          </div>
          <Router>
            <div>
              <Switch>
                {/* <Route exact path='/sign-in' component={SignIn} /> */}
                <Route path='/keyboard' component={Alphabet} />
                <Route path='/contacts' component={Contacts} />
                <Route path='/create-contact' component={CreateContactForm} />
                <Route path='/confirm' component={Confirm} />
                <Route path='/sign-out' component={SignOut} />
              </Switch>
              <SendTo />
              <Footer />
            </div>
          </Router>
        </div>
      )

  }
}

export default App;