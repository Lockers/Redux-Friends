import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, withRouter} from 'react-router-dom';
import { friendsReducer } from './Reducers/reducers'
import { App } from './App';



const store = createStore(
    friendsReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
);
const AppWithRouter = withRouter(App);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <AppWithRouter />
        </Provider>
    </Router>,
        document.getElementById('root'));
    
    
