import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Footer from './components/Footer';
import Alphabet from './components/Alphabet';
import Contacts from './components/Contacts';
import CreateContactForm from './components/CreateContact';
import SendTo from './components/SendTo';

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
              <Route exact path='/' component={Alphabet} />
              <Route path='/contacts' component={Contacts} />
              <Route path='/create-contact' component={CreateContactForm} />
            </Switch>
            <SendTo />
            <Footer />
          </div>
        </Router>

      </div>
    );
  }
}

// export default App;

export default App;