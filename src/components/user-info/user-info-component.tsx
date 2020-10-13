import React from 'react';

import './styles/user-info-styles.scss'

interface IUserInfoComponentProps {
	author: {
		login: string;
		name?: string | null;
	};
	displayAvatar?: boolean;
	displayName?: boolean;
}

export const UserInfoComponent = (props: IUserInfoComponentProps) => {
	return (
		<div className="user-info">
			{props.displayAvatar ? <img className="user-info__icon" src={process.env.PUBLIC_URL + '/defaultUserImg.jpg'} alt="Иконка по умолчанию"></img> : null}
			{props.displayName && props.author.name ? <div>{props.author.name}@{props.author.login}</div> : <div className="user-info__login">{props.author.login}</div>}
		</div>
	);
}