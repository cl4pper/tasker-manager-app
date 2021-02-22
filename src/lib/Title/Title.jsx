import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// STYLE
import './Title.scss';

const Title = (props) => {
	const { content, tall, small, bold, italic, underline, center, right } = props;

	return (
		<p
			className={classnames('Title', {
				'Title--tall': tall && !small,
				'Title--small': small && !tall,
				'Title--bold': bold,
				'Title--italic': italic,
				'Title--underline': underline,
				'Title--center': center && !right,
				'Title--right': right && !center
			})}>
			{content}
		</p>
	);
};

Title.propTypes = {
	content: PropTypes.string.isRequired,
	tall: PropTypes.bool,
	small: PropTypes.bool,
	bold: PropTypes.bool,
	italic: PropTypes.bool,
	underline: PropTypes.bool,
	center: PropTypes.bool,
	right: PropTypes.bool
};

export { Title };
