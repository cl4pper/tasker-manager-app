import React, { useState } from 'react';

// STYLE
import './LoginBox.scss';

// COMPONENTS
import { Box, Button, TextInput, Text } from '@lib';

const LoginBox = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

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
			<div className="LoginBox__line">
				<Button label="Login" />
			</div>
		</Box>
	);
};

export { LoginBox };
