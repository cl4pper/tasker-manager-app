import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

// STYLE
import './ProjectList.scss';

// STORE
import { getProjects } from '@store/modules/projects/requests';

// COMPONENTS
import { Text } from '@lib';
import { Project } from '@components';
import { IconLoading } from '@icons';

const ProjectList = () => {

	const dispatch = useDispatch();
	const auth = useSelector((state) => state.auth);
	const authToken = auth.token;

	const projects = useSelector((state) => state.projects);
	const loading = projects.loading;
	const projectsList = projects.projects;

	useEffect(() => {
		if (!projectsList.length) dispatch(getProjects(authToken));
	}, []);

	const renderProjects = () => {
		return (
			<ul className="ProjectList__list">
				{projectsList.map((project, idx) => (
					<li className="ProjectList__project" key={idx}>
						<Project project={project} />
					</li>
				))}
			</ul>
		);
	};

	const renderList = () => {
		return projectsList.length ? renderProjects() : <Text content="No project" tall italic center />;
	};

	return (
		<section
			className={classNames('ProjectList', {
				'ProjectList--empty': !projectsList.length
			})}>
			{loading ? <IconLoading className="ProjectList__loader" /> : renderList()}
		</section>
	);
};

export { ProjectList };
