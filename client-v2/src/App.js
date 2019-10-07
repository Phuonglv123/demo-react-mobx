import React from 'react';
import promiseFinally from 'promise.prototype.finally';
import ProductStore from './stores/ProductStore';
import AuthStore from './stores/AuthStore';
import {Provider} from "mobx-react";
import {createBrowserHistory} from "history";
import {Router, Route, Switch} from "react-router-dom";
import LoginScene from "./scenes/LoginScene/LoginScene";
import HomeScene from "./scenes/HomeScene/HomeScene";
import {PrivateRoute} from "./components/AppRoute/PrivateRoute";
import DashboardScene from "./scenes/DashboardScene/DashboardScene";

const stores = {
    ProductStore,
    AuthStore
};

// For easier debugging
window._____APP_STATE_____ = stores;
promiseFinally.shim();

const history = createBrowserHistory();

function App() {
    return (
        <Provider {...stores}>
            <Router history={history}>
                <Switch>
                    <Route path='/login' exact={true} component={LoginScene}/>
                    <Route path='/' exact={true} component={HomeScene}/>
                    <PrivateRoute path='/admin' exact={true} component={DashboardScene}/>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;
