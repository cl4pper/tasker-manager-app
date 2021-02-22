import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

const UnloggedPath = (props) => {
	const { children } = props;

	const auth = useSelector((state) => state.auth);
	const authToken = auth.token;
	const history = useHistory();

	function backToHome() {
		history.push('/home');
		return <Redirect to="/home" />;
	}

	return authToken.length === 0 ? children : backToHome();
};

export { UnloggedPath };
