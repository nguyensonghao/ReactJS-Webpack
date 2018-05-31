import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createBrowserHistory } from 'history';

import './App.css';
import Home from './components/home';
import Post from './components/post';
import reducers from './reducers';

const store = createStore(reducers);

export default class App extends React.Component {
    constructor () {
        super();
    }

    render() {
        return (
            <div className="app">
                <Provider store={store}>
                    <Router history={createBrowserHistory}>
                        <Switch>
                            <Route
                                exact
                                path='/'
                                render={(props) => <Home {...props}/>}/>
                            <Route
                                exact
                                path='/post/:id'
                                render={(props) => <Post {...props} />} />
                        </Switch>
                    </Router>
                </Provider>
            </div>
        );
    }
}