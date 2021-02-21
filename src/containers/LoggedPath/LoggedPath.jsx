import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const LoggedPath = (props) => {
	const { children, to } = props;

	const auth = useSelector((state) => state.auth);
	const logged = auth.logged;

	return logged ? children : <Redirect to={to} />;
};

export { LoggedPath };
