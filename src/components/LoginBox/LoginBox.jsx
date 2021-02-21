import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// STYLE
import './LoginBox.scss';

// STORE
import { loginRequest } from '@store/modules/auth/requests';

// COMPONENTS
import { Box, Button, TextInput, Text } from '@lib';

const LoginBox = () => {
	const dispatch = useDispatch();
	// AUTH STATE
	const auth = useSelector((state) => state.auth);
	const loading = auth.loading;
	const error = auth.error;

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	function clearInputs() {
		// first: clear state
		// second: clear input component (by id)
		setUsername('');
		document.getElementById('input-login-username').value = '';
		setPassword('');
		document.getElementById('input-login-password').value = '';
	}

	function login() {
		dispatch(
			loginRequest({
				username,
				password
			})
		);
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
					error={error && username.length}
					errorLabel="Incorrect username"
					onChange={(e) => setUsername(e)}
				/>
			</div>
			<div className="LoginBox__line">
				<TextInput
					id="input-login-password"
					placeholder="Password"
					error={error && password.length}
					errorLabel="Incorrect password"
					onChange={(e) => setPassword(e)}
				/>
			</div>
			<div className="LoginBox__buttons">
				<Button label="Login" onClick={() => login()} loading={loading} />
				<Button label="Clear" secondary onClick={() => clearInputs()} loading={loading} />
			</div>
		</Box>
	);
};

export { LoginBox };
