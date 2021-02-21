import React from 'react';
import { useSelector } from 'react-redux';

// STYLE
import './Topbar.scss';

// COMPONENTS
import { Text } from '@lib';

const Topbar = () => {
	const auth = useSelector((state) => state.auth);
	const data = auth.data;

	return (
		<div className="Topbar">
			<div className="Topbar__section">
				<Text content="LOGO" tall />
			</div>
			{
				data !== null
					? (
						<div className="Topbar__section">
							<Text content={data.username} right />
						</div>
					) : null
			}
		</div>
	);
};

export { Topbar };
