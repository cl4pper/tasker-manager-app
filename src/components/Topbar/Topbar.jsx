import React from 'react';

// STYLE
import './Topbar.scss';

// COMPONENTS
import { Text } from '@lib';

const Topbar = () => {
	const userName = "Username";

	return (
		<div className="Topbar">
			<div className="Topbar__section">
				<Text content="LOGO" tall />
			</div>
			<div className="Topbar__section">
				<Text content={userName} right/>
			</div>
		</div>
	)
}

export { Topbar };
