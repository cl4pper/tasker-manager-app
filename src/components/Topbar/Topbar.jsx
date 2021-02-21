import React from 'react';
import { useSelector } from 'react-redux';

// STYLE
import './Topbar.scss';

// COMPONENTS
import { Text } from '@lib';

const Topbar = () => {
	const auth = useSelector((state) => state.auth);
	const logged = auth.logged;

	const userName = 'Username';

	return (
		<div className="Topbar">
			<div className="Topbar__section">
				<Text content="LOGO" tall />
			</div>
			<div className="Topbar__section">
				{ logged && <Text content={userName} right /> }
			</div>
		</div>
	);
};

export { Topbar };
