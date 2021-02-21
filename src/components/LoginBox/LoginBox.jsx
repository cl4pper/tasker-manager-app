import React, { useState } from 'react';

// STYLE
import './LoginBox.scss';

// COMPONENTS
import { Box, Button, TextInput, Text } from '@lib';

const LoginBox = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function clearInputs () {
		// first: clear state
		// second: clear input component (by id)
		setUsername('');
		document.getElementById('input-login-username').value = '';
		setPassword('');
		document.getElementById('input-login-password').value = '';
	}

	return (
		<Box>
			<div className="LoginBox__line">
				<Text content="Login" />
			</div>
			<div className="LoginBox__line">
				<TextInput
					id="input-login-username"
					placeholder="Username"
					errorLable="Incorrect username"
					onChange={(e) => setUsername(e)}
				/>
			</div>
			<div className="LoginBox__line">
				<TextInput
					id="input-login-password"
					placeholder="Password"
					errorLable="Incorrect password"
					onChange={(e) => setPassword(e)}
				/>
			</div>
			<div className="LoginBox__buttons">
				<Button label="Login"/>
				<Button label="Clear" secondary onClick={() => clearInputs()} />
			</div>
		</Box>
	);
};

export { LoginBox };
