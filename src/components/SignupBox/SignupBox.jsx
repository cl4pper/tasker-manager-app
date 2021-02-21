import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

// STYLE
import './SignupBox.scss';

// STORE
import { signupRequest } from '@store/modules/auth/requests';

// COMPONENTS
import { Box, Button, TextInput, Text, MainLink } from '@lib';

const SignupBox = () => {
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
		document.getElementById('input-signup-username').value = '';
		setPassword('');
		document.getElementById('input-signup-password').value = '';
	}

	function signup() {
		dispatch(
			signupRequest({
				username,
				password
			})
		);

		clearInputs();
	}

	return (
		<Box>
			<div className="SignupBox__line">
				<Text content="Register" />
				<MainLink content="Login" href="/" />
			</div>
			<div className="SignupBox__line">
				<TextInput
					id="input-signup-username"
					placeholder="Username"
					error={error && username.length}
					errorLabel="Incorrect username"
					onChange={(e) => setUsername(e)}
				/>
			</div>
			<div className="SignupBox__line">
				<TextInput
					id="input-signup-password"
					placeholder="Password"
					error={error && password.length}
					errorLabel="Incorrect password"
					onChange={(e) => setPassword(e)}
				/>
			</div>
			<div className="SignupBox__buttons">
				<Button label="Register" onClick={() => signup()} loading={loading} />
				<Button label="Clear" secondary onClick={() => clearInputs()} loading={loading} />
			</div>
		</Box>
	);
};

export { SignupBox };
