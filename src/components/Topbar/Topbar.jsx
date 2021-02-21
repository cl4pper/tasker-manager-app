import React from 'react';
import { useSelector } from 'react-redux';

// STYLE
import './Topbar.scss';

// COMPONENTS
import { Text } from '@lib';

const Topbar = () => {
	const auth = useSelector((state) => state.auth);
	const data = auth.data;

	function logout() {
		localStorage.removeItem('taskManagerToken');
		window.location.reload();
	}

	return (
		<div className="Topbar">
			<div className="Topbar__section">
				<Text content="LOGO" tall />
			</div>
			{data !== null ? (
				<div className="Topbar__section" onClick={() => logout()}>
					<Text content={data.username} right />
				</div>
			) : null}
		</div>
	);
};

export { Topbar };
