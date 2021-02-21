import React from 'react';
import { useSelector } from 'react-redux';

// STYLE
import './Topbar.scss';

// COMPONENTS
import { Text } from '@lib';

const Topbar = () => {
	const user = useSelector((state) => state.user);
	const userData = user.data;
	const username = userData.username;

	function logout() {
		localStorage.removeItem('taskManagerToken');
		window.location.reload();
	}

	return (
		<div className="Topbar">
			<div className="Topbar__section">
				<Text content="LOGO" tall />
			</div>
			<div className="Topbar__section" onClick={() => logout()}>
				<Text content={username} right />
			</div>
		</div>
	);
};

export { Topbar };
