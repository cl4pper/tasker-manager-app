import React from 'react';
import PropTypes from 'prop-types';

// STYLE
import './Checkbox.scss';

// COMPONENTS
import { IconCheck } from '@icons';

const Checkbox = (props) => {
	const { checked } = props;

	return <div className="Checkbox">{checked ? <IconCheck /> : ''}</div>;
};

export { Checkbox };

Checkbox.propTypes = {
	checked: PropTypes.bool
};
