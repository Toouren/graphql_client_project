import React from 'react';
import { QueryRenderer } from 'react-relay';
import { useRelayEnvironment } from 'react-relay/hooks';

import './styles/comments-list-styles.scss';

import { commentsByPostIdQuery } from '../../requests/comments';
import { commentsByPostIdQuery as commentsByPostIdQueryType } from '../../requests/__generated__/commentsByPostIdQuery.graphql';
import { UserInfo } from '../user-info/user-info-component';

interface ICommentsListComponentProps {
	postId: string;
}

const RenderCommentsListComponent: QueryRenderer<commentsByPostIdQueryType>['props']['render'] = ({ error, props }) => {
	if (error) {
		return <div>{error.message}</div>;
	} else if (props && props.commentsByPostId) {
		if (props.commentsByPostId.length) {
			const comments = props.commentsByPostId.map((comment) => {
				return <div className="comment-block" key={comment.id}>
					<UserInfo author={comment.author} displatAvatar={true}></UserInfo>
					<div className="comment-block__comment-text">{comment.content}</div>
				</div>
			});

			return <div className="comments-list">{comments}</div>
		} else {
			return <div>Комментариев пока нет</div>
		}
	}

	return <div>Loading</div>;
}

export const CommentsListComponent = (props: ICommentsListComponentProps) => {
	const environment = useRelayEnvironment();

	return (
		<QueryRenderer <commentsByPostIdQueryType>
			environment={environment}
			query={commentsByPostIdQuery}
			variables={{ postId: props.postId }}
			render={RenderCommentsListComponent}></QueryRenderer>
	);
}