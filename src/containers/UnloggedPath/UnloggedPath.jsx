import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

const UnloggedPath = (props) => {
	const { children, to } = props;

	const auth = useSelector((state) => state.auth);
	const logged = auth.logged;
	const history = useHistory();

	function backToHome() {
		history.push(to);
		return <Redirect to={to} />;
	}

	return !logged ? children : backToHome();
};

export { UnloggedPath };
