import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

// STYLE
import './Button.scss';

// COMPONENTS
import { Text } from '@lib';
import { IconLoading } from '@icons';

const Button = (props) => {
	const { label, onClick, secondary, loading } = props;

	return (
		<button
			className={classnames('Button', {
				'Button--disabled': loading,
				'Button--secondary': secondary
			})}
			onClick={onClick}>
			{loading && <IconLoading className="Button__loader" />}
			{!loading && <Text bold center content={label} small />}
		</button>
	);
};

Button.propTypes = {
	label: PropTypes.string.isRequired,
	secondary: PropTypes.bool,
	loading: PropTypes.bool,
	onClick: PropTypes.func
};

export { Button };
