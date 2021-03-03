import React from 'react';
import Home from './pages/Home/index'
import NotFound from './pages/NotFound/index'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)
export default Routes;