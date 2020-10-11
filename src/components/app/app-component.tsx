import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { environment } from '../../requests/utility-request';
import { Login } from '../login/login-component';
import { Main } from '../main/main-component';
import { Users } from '../users/users-component';

export const App = () => {
    return (
        <RelayEnvironmentProvider environment={environment}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/users">
                        <Users></Users>
                    </Route>
                    <Route exact path="/login">
                        <Login></Login>
                    </Route>
                    <Route exact path="/main">
                        <Main></Main>
                    </Route>
                </Switch>
            </BrowserRouter>
        </RelayEnvironmentProvider>
    );
}