import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// STYLE
import './Home.scss';

// STORE
import { getProjects } from '@store/modules/projects/requests';

// COMPONENTS
import { ProjectList } from '@containers';

const HomePage = () => {
	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const authToken = auth.token;

	const projects = useSelector((state) => state.projects);

	useEffect(() => {
		if (!projects.length) dispatch(getProjects(authToken));
	}, []);

	return (
		<div className="HomePage">
			<ProjectList projects={projects.projects} />
		</div>
	);
};

export { HomePage };
