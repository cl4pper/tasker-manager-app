import React, { useState } from 'react';
import PropTypes from 'prop-types';

// STYLE
import './Task.scss';

// COMPONENTS
import { Checkbox, Text } from '@lib';

const Task = (props) => {
	const { content } = props;

	const [done, setDone] = useState(false);

	function updateCardStatus() {
		return setDone(!done);
	}

	return (
		<div className="Task" onClick={() => updateCardStatus()}>
			<div className="Task__checkbox">
				<Checkbox checked={done} />
			</div>
			<div className="Task__content">
				<Text content={content} />
			</div>
		</div>
	);
};

Task.propTypes = {
	content: PropTypes.string.isRequired
};

export { Task };
