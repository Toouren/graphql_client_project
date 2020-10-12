import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { environment } from '../../requests/utility-request';
import { LoginComponent } from '../login/login-component';
import { MainComponent } from '../main/main-component';
import { isUserAuthorized } from '../utils/local-storage-helper';
import { PostDetailComponent } from '../post-detail/post-detail-component';

export const App = () => {
	return (
		<RelayEnvironmentProvider environment={environment}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						{isUserAuthorized() ? <Redirect to="/main"/> : <LoginComponent/>}
					</Route>
					<Route exact path="/login">
						{isUserAuthorized() ? <Redirect to="/main"/> : <LoginComponent/>}
					</Route>
					<Route exact path="/main">
						{!isUserAuthorized() ? <Redirect to="/login"/> : <MainComponent/>}
					</Route>
					<Route exat path="/post/:id">
						{!isUserAuthorized() ? <Redirect to="/login"/> : <PostDetailComponent/>}
					</Route>
				</Switch>
			</BrowserRouter>
		</RelayEnvironmentProvider>
	);
}