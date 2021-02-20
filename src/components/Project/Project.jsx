import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// STYLE
import './Project.scss';

// COMPONENTS
import { Text } from '@lib';
import { Task } from '@components';

const Project = (props) => {
	const { tasks, title } = props;

	const renderList = () => {
		return (
			<ul className="Project__taskList">
				{tasks.map((task, idx) => (
					<li className="Project__taskItem" key={idx}>
						<Task content={task.content} />
					</li>
				))}
			</ul>
		);
	};

	const renderEmptyList = () => {
		return (
			<div
				className={classNames('Project__taskList', {
					'Project__taskList--empty': !tasks.length
				})}>
				<Text content="No task" italic />
			</div>
		);
	};

	return (
		<div className="Project">
			<div className="Project__topbar">
				<Text content={title} tall />
			</div>
			{tasks.length ? renderList() : renderEmptyList()}
		</div>
	);
};

Project.propTypes = {
	tasks: PropTypes.array,
	title: PropTypes.string
};

export { Project };
