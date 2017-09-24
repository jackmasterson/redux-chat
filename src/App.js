import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Message from './components/Message';
import Footer from './components/Footer';
import Alphabet from './components/Alphabet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="message">
          <Message />
        </div>
        <Router>
          <div className="Todo-app">
            <Route path='/:filter?' render={({match}) => (
              <Alphabet filter={match.params.filter} />
            )} />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

// export default App;

export default App;