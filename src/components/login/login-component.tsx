import React from 'react';
import { fetchQuery, useRelayEnvironment } from 'react-relay/hooks';
import { useHistory } from 'react-router-dom';

import { JWT_AUTH_TOKEN_KEY } from '../../constants/constants';
import { loginQuery } from '../../requests/login';

interface ILoginErrorProps {
    error: boolean;
}

const LoginError: React.FunctionComponent<ILoginErrorProps> = ({error}: ILoginErrorProps) => {
    if (error) {
        return <div>Ошибка входа</div>
    } else {
        return null;
    }
}

export const Login: React.FunctionComponent = () => {
    const [login, setLogin] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [error, setError] = React.useState<boolean>(false);

    const history = useHistory();

    const environment = useRelayEnvironment();

    const handleChangeLogin = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
        handleChangeError(false);
    }, []);

    const handleChangePassword = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
        handleChangeError(false);
    }, []);

    const handleChangeError = React.useCallback((event: boolean) => {
        setError(event);
    }, []);

    const submitButtonDisabled = !login || !password;


    const handleSubmit = React.useCallback(() => {
        fetchQuery(
            environment,
            loginQuery,
            { login, password },
        ).subscribe({
            next: (data: any) => {
                localStorage.setItem(JWT_AUTH_TOKEN_KEY, data.login.accessToken);
                history.replace({pathname: '/'});
            },
            error: () => {
                handleChangeError(true);
            }
        })


    }, [environment, login, password, history]);

    return (
        <div>
            <LoginError error={error}></LoginError>
            <input type="text" value={login} onChange={handleChangeLogin} />
            <input type="password" value={password} onChange={handleChangePassword} />
            <button disabled={submitButtonDisabled} onClick={handleSubmit}>Войти</button>
        </div>
    );
        
}