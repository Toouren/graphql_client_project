import React from 'react';

import './styles/loader-styles.scss';

export const LoaderComponent = () => {
	return (
		<div className="loader-block">
			<div className="loader-block__spinner"></div>
		</div>
	);
}