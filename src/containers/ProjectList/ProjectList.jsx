import React from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

// STYLE
import './ProjectList.scss';

// COMPONENTS
import { Text } from '@lib';
import { Project } from '@components';

const ProjectList = props => {
	const { projects } = props;

	const user = useSelector((state) => state.user);
	// const projects = user.projects;
	// console.log(data);

	console.log(projects)

	const renderProjects = () => {
		return (
			<ul className="ProjectList__list">
				{projects.map((project, idx) => (
					<li className="ProjectList__project" key={idx}>
						<Project project={project} />
					</li>
				))}
			</ul>
		);
	};

	const renderList = () => {
		return projects.length ? renderProjects() : <Text content="No project" tall italic center />;
	};
	return (
		<section
			className={classNames('ProjectList', {
				'ProjectList--empty': !projects.length
			})}>
			{renderList()}
		</section>
	);
};

export { ProjectList };
