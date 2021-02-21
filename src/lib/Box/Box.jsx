import React from 'react';

// STYLE
import './Box.scss';

const Box = (props) => {
	const { children } = props;
	return <div className="Box">{children}</div>;
};

export { Box };
