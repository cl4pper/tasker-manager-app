import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoggedPath = (props) => {
	const { children } = props;

	const auth = useSelector((state) => state.auth);
	const data = auth.data;

	const condRedirect = () => {
		console.log(window.location.pathname);
		if (
			data !== null &&
			(window.location.pathname !== '/' || window.location.pathname !== '/signup')
		) {
			return <Redirect to="/" />;
		}

		return children;
	};

	return condRedirect();
};

export { LoggedPath };
