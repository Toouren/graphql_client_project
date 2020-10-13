import React from 'react';
import { QueryRenderer } from 'react-relay';
import { useRelayEnvironment } from 'react-relay/hooks';
import { Link } from 'react-router-dom';

import './styles/posts-list-styles.scss';

import { postsQuery } from '../../requests/post';
import { postsQuery as postsQueryType } from '../../requests/__generated__/postsQuery.graphql';
import { UserInfoComponent } from '../user-info/user-info-component';

const RenderPostsListComponent: QueryRenderer<postsQueryType>['props']['render'] = ({ error, props }) => {
	if (error) {
		return <div>{error.message}</div>;
	} else if (props && props.posts) {
		if (props.posts.length) {
			const posts = props.posts.map((post) => {

				return <div className="post-block" key={post.id}>
					<Link to={`/post/${post.id}`} className="post-header">
						<h3 className="post-header__title">{post.title}</h3>
						<div className="post-header__author-info">
							Автор: <UserInfoComponent author={post.author}></UserInfoComponent>
						</div>
					</Link>
					<div className="post-block__content">{post.content.length > 100 ? post.content.slice(0, 100) + '...' : post.content}</div>
				</div>
			});

		return <div className="posts-list">{ posts }</div>
		} else {
			return <div>Постов пока нет</div>
		}
	}

	return <div>Loading</div>;
}

export const PostsListComponent = () => {
	const environment = useRelayEnvironment();

	return (
		<QueryRenderer <postsQueryType>
			environment={environment}
			query={postsQuery}
			variables={{}}
			render={RenderPostsListComponent}></QueryRenderer>
	);
}