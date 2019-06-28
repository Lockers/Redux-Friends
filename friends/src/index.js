import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
// import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { logInFriendsReducer, getFriendsReducer, initialState } from './Reducers/reducers'
import App from './App';

const combineReducer = combineReducers(
    { log: logInFriendsReducer, getStuff: getFriendsReducer }
)

const store = createStore(
    combineReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
);
// const AppWithRouter = withRouter(App);

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>,
    document.getElementById('root'));


