import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// STYLE
import './Button.scss';

// COMPONENTS
import { Text } from '@lib';

const Button = props => {
	const { label, onClick, secondary, loading } = props;

	return (
		<button
			className={classnames('Button', {
				'Button--secondary': secondary
			})}
			onClick={onClick}>
			{loading && (
				A
			)}
			{!loading && (
				<Text
					bold
					center
					content={label} />
			)}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	secondary: PropTypes.bool,
	loading: PropTypes.bool,
	onClick: PropTypes.func,
};

export { Button };