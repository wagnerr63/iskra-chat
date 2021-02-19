import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Chat from './pages/Chat';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Chat} />
            </Switch>
        </BrowserRouter>
    );
}