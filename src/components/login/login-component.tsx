import React from 'react';
import { fetchQuery, useRelayEnvironment } from 'react-relay/hooks';
import { useHistory } from 'react-router-dom';

import './styles/login-styles.scss';

import { JWT_AUTH_TOKEN_KEY } from '../../constants/constants';
import { loginQuery } from '../../requests/login';
import { loginQuery as LoginQueryType } from '../../requests/__generated__/loginQuery.graphql';

interface ILoginErrorProps {
	error: boolean;
}

const LoginErrorComponent: React.FunctionComponent<ILoginErrorProps> = ({ error }: ILoginErrorProps) => {
	if (error) {
		return <div>Ошибка входа</div>
	} else {
		return null;
	}
}

export const LoginComponent: React.FunctionComponent = () => {
	const [login, setLogin] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');
	const [error, setError] = React.useState<boolean>(false);

	const history = useHistory();

	const environment = useRelayEnvironment();

	const handleChangeError = React.useCallback((event: boolean) => {
		setError(event);
	}, []);

	const handleChangeLogin = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setLogin(event.target.value);
		handleChangeError(false);
	}, [handleChangeError]);

	const handleChangePassword = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
		handleChangeError(false);
	}, [handleChangeError]);

	const submitButtonDisabled = !login || !password;

	const handleSubmit = React.useCallback(() => {
		fetchQuery<LoginQueryType>(
			environment,
			loginQuery,
			{ login, password },
		).subscribe({
			next: (data: LoginQueryType['response']) => {
				localStorage.setItem(JWT_AUTH_TOKEN_KEY, data.login.accessToken);
				history.replace({pathname: '/main'});
			},
			error: () => {
				handleChangeError(true);
			}
		})


	}, [environment, login, password, history, handleChangeError]);

	return (
		<div className="login-form">
			<LoginErrorComponent error={error}></LoginErrorComponent>
			<input className="login-form__login-input" type="text" value={login} onChange={handleChangeLogin} />
			<input className="login-form__password-input" type="password" value={password} onChange={handleChangePassword} />
			<button className="login-form__submit-button" disabled={submitButtonDisabled} onClick={handleSubmit}>Войти</button>
		</div>
	);

}