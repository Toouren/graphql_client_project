import React from 'react';
import { QueryRenderer } from 'react-relay';
import { useRelayEnvironment } from 'react-relay/hooks';

import { postQuery } from '../../requests/post';

import { postQuery as postQueryType } from '../../requests/__generated__/postQuery.graphql';
import { UserInfo } from '../user-info/user-info-component';
import { useParams } from 'react-router-dom';
import { CommentsListComponent } from '../comments-list/comments-list-component';

import './styles/post-detail-styles.scss';

const RenderPostDetailComponent: QueryRenderer<postQueryType>['props']['render'] = ({ error, props }) => {
	if (error) {
		return <div>{error.message}</div>;
	} else if (props && props.post) {
		return <div className="post-block post-block_border-none" key={props.post.id}>
			<div className="post-header">
				<h3 className="post-header__title">{props.post.title}</h3>
				<div className="post-header__user-info">
					<UserInfo author={props.post.author} displatAvatar={true}></UserInfo>
				</div>
			</div>
			<div className="post-block__content">
				<div className="post-block__post-text">{props.post.content}</div>
				<CommentsListComponent postId={props.post.id}/>
			</div>
		</div>
	} else {
		return <div>Пост не найден</div>
	}
}

export const PostDetailComponent = () => {
	const environment = useRelayEnvironment();
	const { id }: { id: string } = useParams();

	return (
		<QueryRenderer <postQueryType>
			environment={environment}
			query={postQuery}
			variables={{ id }}
			render={RenderPostDetailComponent}></QueryRenderer>
	);
}