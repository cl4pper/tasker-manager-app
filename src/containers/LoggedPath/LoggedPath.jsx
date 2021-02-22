import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoggedPath = (props) => {
	const { children } = props;

	const auth = useSelector((state) => state.auth);
	const authToken = auth.token;

	const condRedirect = () => {
		if (authToken.length === 0) {
			if (window.location.pathname === '/') return <Redirect to="/" />;
			if (window.location.pathname === '/signup') return <Redirect to="/signup" />;

			return <Redirect to="/" />;
		}

		return children;
	};

	return condRedirect();
};

export { LoggedPath };
