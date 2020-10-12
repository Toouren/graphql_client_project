import React from 'react';

import './styles/user-info-styles.scss'

interface IUserInfoComponentProps {
	author: {
		login: string;
		name?: string;
	};
	displatAvatar?: boolean;
}

export const UserInfo = (props: IUserInfoComponentProps ) => {
    return (
		<div className="user-info">
			{props.displatAvatar ? <img className="user-info__icon" src={process.env.PUBLIC_URL + '/defaultUserImg.jpg'} alt="Иконка по умолчанию"></img> : null}
			<div className="user-info__login">{props.author.login}</div>
		</div>
    );
}