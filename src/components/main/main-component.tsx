import React from 'react';
import { Link } from 'react-router-dom';

import { PostsListComponent } from '../posts-list/posts-list-component';
import { HeaderComponent } from '../header/header-component';

import './styles/main-styles.scss';

export const MainComponent = () => {
	return (
		<div>
			<HeaderComponent />
			<PostsListComponent />
			<Link className="new-post-link" to="/new-post">
				<img src={`${process.env.PUBLIC_URL + '/plus.png'}`} alt="Перейти к созданию нового поста"></img>
			</Link>
		</div>
	);
};