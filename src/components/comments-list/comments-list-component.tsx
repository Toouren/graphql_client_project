import React from 'react';
import { QueryRenderer } from 'react-relay';
import { useRelayEnvironment } from 'react-relay/hooks';

import './styles/comments-list-styles.scss';

import { commentsByPostIdQuery } from '../../requests/comment';
import { commentsByPostIdQuery as CommentsByPostIdQueryType } from '../../requests/__generated__/commentsByPostIdQuery.graphql';
import { UserInfoComponent } from '../user-info/user-info-component';
import { LoaderComponent } from '../loader/loader-component';

interface ICommentsListComponentProps {
	postId: string;
}

const RenderCommentsListComponent: QueryRenderer<CommentsByPostIdQueryType>['props']['render'] = ({ error, props }) => {
	if (error) {
		return <div>{error.message}</div>;
	} else if (props && props.commentsByPostId) {
		if (props.commentsByPostId.length) {
			const comments = props.commentsByPostId.map((comment) => {
				return <div className="comment-block" key={comment.id}>
					<UserInfoComponent author={comment.author} displayAvatar={true}></UserInfoComponent>
					<div className="comment-block__comment-text">{comment.content}</div>
				</div>
			});

			return <div className="comments-list">{comments}</div>
		} else {
			return <div>Комментариев пока нет</div>
		}
	}

	return <LoaderComponent/>;;
}

export const CommentsListComponent = (props: ICommentsListComponentProps) => {
	const environment = useRelayEnvironment();

	return (
		<QueryRenderer <CommentsByPostIdQueryType>
			environment={environment}
			query={commentsByPostIdQuery}
			variables={{ postId: props.postId }}
			render={RenderCommentsListComponent} />
	);
}