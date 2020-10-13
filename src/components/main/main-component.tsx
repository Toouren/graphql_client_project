import React from 'react';
import { PostsListComponent } from '../posts-list/posts-list-component';
import { HeaderComponent } from '../header/header-component';

export const MainComponent = () => {
	return (
		<div>
			<HeaderComponent />
			<PostsListComponent />
		</div>
	);
};