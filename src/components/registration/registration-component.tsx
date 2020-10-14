import React from 'react';
import { useRelayEnvironment } from 'react-relay/hooks';
import { useHistory, Link } from 'react-router-dom';

import './styles/registration-styles.scss';

import { userCreateMutation as UserCreateMutationType } from '../../requests/__generated__/userCreateMutation.graphql';
import { commitMutation } from 'react-relay';
import { userCreateMutation } from '../../requests/user';

interface IRegistrationErrorProps {
	error: boolean;
}

const RegistrationErrorComponent: React.FunctionComponent<IRegistrationErrorProps> = ({ error }: IRegistrationErrorProps) => {
	if (error) {
		return <div className="registration-form__error">Ошибка регистрации, проверьте правильность ввода логина и пароля</div>
	} else {
		return null;
	}
}

const RegistrationSuccessComponent: React.FunctionComponent = () => {
	return <div className="global-form-wrapper">
		<div className="registration-success">
			<div>Регистрация прошла успешно.</div>
			<div>Вскоре вы будете перенаправлены на страницу авторизации!</div>
		</div>
	</div>
}

export const RegistrationComponent: React.FunctionComponent = () => {
	const [login, setLogin] = React.useState<string>('');
	const [name, setName] = React.useState<string>('');
	const [password, setPassword] = React.useState<string>('');
	const [error, setError] = React.useState<boolean>(false);
	const [success, setSuccess] = React.useState<boolean>(false);

	const history = useHistory();

	const environment = useRelayEnvironment();

	const handleChangeError = React.useCallback((event: boolean) => {
		setError(event);
	}, []);

	const handleChangeSuccess = React.useCallback((event: boolean) => {
		setSuccess(event);
	}, []);

	const handleChangeLogin = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setLogin(event.target.value);
		handleChangeError(false);
	}, [handleChangeError]);

	const handleChangeName = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setName(event.target.value);
		handleChangeError(false);
	}, [handleChangeError]);

	const handleChangePassword = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setPassword(event.target.value);
		handleChangeError(false);
	}, [handleChangeError]);

	const submitButtonDisabled = !login || !password;

	const handleSubmit = React.useCallback(() => {
		commitMutation<UserCreateMutationType>(
			environment,
			{
				mutation: userCreateMutation,
				variables: {
					data: {
						login,
						name,
						password
					}
				},
				onCompleted: () => {
					handleChangeSuccess(true);
					setTimeout(() => history.replace('/login'), 2000)
				},
				onError: (error) => {
					handleChangeError(true);
					console.error(error);
				},
			}
		)
	}, [environment, login, name, password, handleChangeSuccess, history, handleChangeError]);

	if (!success) {
		return (
			<div className="global-form-wrapper">
				<div className="registration-form">
					<h2 className="registration-form__header">Регистрация</h2>
					<input className="registration-form__login-input" placeholder="Логин" type="text" value={login} onChange={handleChangeLogin} />
					<input className="registration-form__name-input" placeholder="Имя (необязательно)" type="text" value={name} onChange={handleChangeName} />
					<input className="registration-form__password-input" placeholder="Пароль" type="password" value={password} onChange={handleChangePassword} />
					<div className="registration-form__auth-link">
						<div>Уже есть аккаунт?</div>
						<Link to="/login">Авторизация</Link>
					</div>
					<button className="registration-form__submit-button" disabled={submitButtonDisabled} onClick={handleSubmit}>Зарегистрироваться</button>
					<RegistrationErrorComponent error={error} />
				</div>
			</div>
		);
	} else {
		return <RegistrationSuccessComponent />
	}
}