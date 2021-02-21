import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

// STYLE
import './BottomBar.scss';

// COMPONENTS
import { Button, TextInput } from '@lib';

const BottomBar = () => {
	const [projectName, setProjectName] = useState('');
	const auth = useSelector((state) => state.auth);
	const data = auth.data;

	function clearInput() {
		setProjectName('');
		document.getElementById('botom-bar-button').value = '';
	}

	function submit() {
		console.log(projectName);
		clearInput();
	}

	return (
		<div
			className={classNames('BottomBar', {
				'BottomBar--hidden': data === null
			})}>
			<div className="BottomBar__section BottomBar__section--left">
				<TextInput
					id="botom-bar-button"
					placeholder="Project name"
					errorLabel="Invalid input"
					error={false}
					onChange={(e) => setProjectName(e)}
				/>
			</div>
			<div className="BottomBar__section BottomBar__section--right">
				<Button label="Create project" loading={false} onClick={() => submit()} />
			</div>
		</div>
	);
};

export { BottomBar };
