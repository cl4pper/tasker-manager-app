import React, { useState } from 'react';

// STYLE
import './Task.scss';

// COMPONENTS
import { Checkbox, Text } from '@lib';

const Task = () => {
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
				<Text content="Task" />
			</div>
		</div>
	);
};

export { Task };
