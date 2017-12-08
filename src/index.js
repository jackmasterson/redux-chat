import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import './App.css';
import App from './App';
import SignIn from './components/SignIn';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <SignIn />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

