import React from 'react';

// STYLE
import './Home.scss';

// COMPONENTS
import { ProjectList } from '@containers';

const HomePage = () => {
	return (
		<div className="HomePage">
			<ProjectList />
		</div>
	);
};

export { HomePage };
