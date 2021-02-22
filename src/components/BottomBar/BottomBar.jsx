import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';

// STYLE
import './BottomBar.scss';

// STORE
import { createProject } from '@store/modules/projects/requests';

// COMPONENTS
import { Button, TextInput } from '@lib';

const BottomBar = () => {
	const dispatch = useDispatch();
	const [projectName, setProjectName] = useState('');
	const auth = useSelector((state) => state.auth);
	const authToken = auth.token;

	function clearInput() {
		setProjectName('');
		document.getElementById('botom-bar-button').value = '';
	}

	function submit() {
		dispatch(createProject(authToken, projectName));
		clearInput();
	}

	return (
		<div
			className={classNames('BottomBar', {
				'BottomBar--hidden': authToken.length === 0
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
