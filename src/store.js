import {createStore, applyMiddleware, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todo';
import messageReducer from './reducers/messages';
import alphabetReducer from './reducers/alphabet';
import contactReducer from './reducers/contacts';

const reducer = combineReducers({
    todo: todoReducer,
    message: messageReducer,
    alphabet: alphabetReducer,
    contact: contactReducer,
});

export default createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);