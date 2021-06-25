import React from 'react';
import * as utils from './utils';

// STYLES
import './mobile.scss';
import './desktop.scss';

export const HomeMessage = props => {
	const { id, username, hasBoards } = props;

	function setUsername () {
		return username.length
			? username
			: 'User';
	}

	function setMessage () {
		return hasBoards
			? utils.messageWithBoards
			: utils.messageForEmptyBoard;
	};

	return (
		<div
			className="HomeMessage"
			id={id}
			data-testid={`${id}-testid`}>
				<p
					className="HomeMessage__title" data-testid={`${id}-title-testid`}>Welcome, {setUsername()}.</p>
				<p className="HomeMessage__message" data-testid={`${id}-message-testid`}>{setMessage()}</p>
		</div>
	);
};
