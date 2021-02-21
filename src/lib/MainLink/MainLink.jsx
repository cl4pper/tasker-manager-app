import React from 'react';
import PropTypes from 'prop-types';

// STYLE
import './MainLink.scss';

const MainLink = (props) => {
	const { content, href } = props;

	return (
		<a className="MainLink" href={href}>
			{content}
		</a>
	);
};

MainLink.propTypes = {
	content: PropTypes.string.isRequired,
	href: PropTypes.string
};

export { MainLink };
