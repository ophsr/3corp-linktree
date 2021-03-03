import React from 'react';
import Home from './pages/Home/index'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
        </Switch>

    </BrowserRouter>
)
export default Routes;