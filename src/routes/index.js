import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Register from './register';
import Login from './login';

export default () => (
    <BrowserRouter>
    <switch>
        <Route exact path = '/register' component = {Register} />
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/auth' component = {Auth} />
    </switch>
    </BrowserRouter>
);