import React from 'react';

// STYLES
import './mobile.scss';
import './desktop.scss';

export const User = props => {
	const { id, name, photo } = props;

	function setPhoto () {
		return {
			background: photo ? `url(${photo})` : 'black'
		};
	};

	return (
		<div
			className="User"
			id={id}
			data-testid={`${id}-testid`}>
			<div className="User__info">
				<p className="User__name">{name || 'Username'}</p>
				<i className="User__logout">Logout</i>
			</div>
			<div
				data-testid={`${id}-photo-testid`}
				className="User__photo" style={setPhoto()} />
		</div>
	);
};
