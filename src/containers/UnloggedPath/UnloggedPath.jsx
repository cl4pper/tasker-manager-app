import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

const UnloggedPath = (props) => {
	const { children, to } = props;

	const auth = useSelector((state) => state.auth);
	const data = auth.data;
	const history = useHistory();

	function backToHome() {
		history.push(to);
		return <Redirect to={to} />;
	}

	return data === null ? children : backToHome();
};

export { UnloggedPath };
