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
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React with Redux</h2>
        </div>
        <Message />
        <Alphabet />
        <Router>
          <div className="Todo-app">
            <TodoForm />
            <Route path='/:filter?' render={({match}) => (
              <TodoList filter={match.params.filter} />
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