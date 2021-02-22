import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// STYLE
import './Project.scss';

// COMPONENTS
import { Text, Button, TextInput } from '@lib';
import { Task } from '@components';

const Project = (props) => {
	const { project } = props;
	const { title, tasks } = project;

	const [newTask, setNewTask] = useState('');

	const renderOpenList = () => {
		return (
			<>
				<Text content="To Do" bold tall />
				<ul className="Project__taskList">
					{tasks
						.filter((task) => task.status !== 'done')
						.map((task, idx) => (
							<li className="Project__taskItem" key={idx}>
								<Task content={task.content} />
							</li>
						))}
				</ul>
			</>
		);
	};

	const renderDoneList = () => {
		return (
			<>
				<Text content="Done" bold tall />
				<ul className="Project__taskList">
					{tasks
						.filter((task) => task.status === 'done')
						.map((task, idx) => (
							<li className="Project__taskItem" key={idx}>
								<Task content={task.content} />
							</li>
						))}
				</ul>
			</>
		);
	};

	const renderLists = () => {
		return (
			<div className="Project__lists">
				{renderOpenList()}
				{renderDoneList()}
			</div>
		);
	};

	const renderEmptyList = () => {
		return (
			<div
				className={classNames('Project__taskList', {
					'Project__taskList--empty': !tasks.length
				})}>
				<Text content="No tasks" italic center />
			</div>
		);
	};

	return (
		<div className="Project">
			<div className="Project__top">
				<Text content={title} tall />
			</div>
			{tasks.length ? renderLists() : renderEmptyList()}
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
	project: PropTypes.object
};

export { Project };
