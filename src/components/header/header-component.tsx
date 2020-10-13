import React from 'react';
import { useRelayEnvironment } from 'react-relay/hooks';
import { useHistory } from 'react-router-dom';

import { userQuery as UserQueryType } from '../../requests/__generated__/userQuery.graphql';
import { userQuery } from '../../requests/user';
import { QueryRenderer } from 'react-relay';
import { UserInfoComponent } from '../user-info/user-info-component';
import { deleteJwtAuthTokenKey } from '../../utils/local-storage-helper';

import './styles/header-styles.scss';

const RenderHeaderComponent: QueryRenderer<UserQueryType>['props']['render'] = ({ error, props }) => {
	if (error) {
		return <div>{error.message}</div>;
	} else if (props && props.user) {
		return <UserInfoComponent displayAvatar={true} displayName={true} author={props.user} />
	}
}

export const HeaderComponent = () => {
	const environment = useRelayEnvironment();

	const history = useHistory();

	const handleLogout = () => {
		deleteJwtAuthTokenKey();
		history.replace('/login');
	};

	return (
		<div className="header-block">
			<QueryRenderer <UserQueryType>
				environment={environment}
				query={userQuery}
				variables={{}}
				render={RenderHeaderComponent} />
			<div className="header-block__logout-link" onClick={handleLogout}>Выход</div>
		</div>
	);
}