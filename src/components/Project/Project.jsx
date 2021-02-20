import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// STYLE
import './Project.scss';

// COMPONENTS
import { Text, Button, TextInput } from '@lib';
import { Task } from '@components';

const Project = (props) => {
	const { tasks, title } = props;

	const [newTask, setNewTask] = useState('');

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
			<div className="Project__top">
				<Text content={title} tall />
			</div>
			{tasks.length ? renderList() : renderEmptyList()}
			<div className="Project__bottom">
				<div className="Project__bottomContent">
					<div className="Project__input">
						<TextInput
							id="inputText-project"
							placeholder="Task"
							errorLable="Incorrect input"
							onChange={(e) => setNewTask(e)}
						/>
					</div>
					<Button label="Add" />
				</div>
			</div>
		</div>
	);
};

Project.propTypes = {
	tasks: PropTypes.array,
	title: PropTypes.string
};

export { Project };
