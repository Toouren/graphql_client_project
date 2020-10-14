import React from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { environment } from '../../requests/utility-request';
import { LoginComponent } from '../login/login-component';
import { MainComponent } from '../main/main-component';
import { isUserAuthorized } from '../../utils/local-storage-helper';
import { PostDetailComponent } from '../post-detail/post-detail-component';
import { RegistrationComponent } from '../registration/registration-component';
import { NewPostFormComponent } from '../new-post-form/new-post-form-components';

export const App = () => {
	return (
		<RelayEnvironmentProvider environment={environment}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" render={
						() => isUserAuthorized() ? <Redirect to="/main" /> : <Redirect to="/login" />
					}>
					</Route>
					<Route path="/login" render={
						() => isUserAuthorized() ? <Redirect to="/main" /> : <LoginComponent />
					}>
					</Route>
					<Route path="/registration" render={
						() => isUserAuthorized() ? <Redirect to="/main" /> : <RegistrationComponent />
					}>
					</Route>
					<Route path="/main" render={
						() => !isUserAuthorized() ? <Redirect to="/login" /> : <MainComponent />
					}>
					</Route>
					<Route path="/new-post" render={
						() => !isUserAuthorized() ? <Redirect to="/login" /> :  <NewPostFormComponent/>
					}>
					</Route>
					<Route path="/post/:id" render={
						() => !isUserAuthorized() ? <Redirect to="/login" /> : <PostDetailComponent />
					}>
					</Route>
					<Route path="/*">
						<Redirect to="/"></Redirect>
					</Route>
				</Switch>
			</BrowserRouter>
		</RelayEnvironmentProvider>
	);
}