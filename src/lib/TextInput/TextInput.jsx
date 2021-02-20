import React from 'react';
import PropTypes from 'prop-types';

// STYLE
import './TextInput.scss';

const TextInput = (props) => {
	const { id, label, placeholder, error, errorLabel, disabled, onChange } = props;

	return (
		<div className="TextInput">
			{label && <p className="TextInput__label">{label}</p>}
			<input
				id={id}
				className="TextInput__input"
				placeholder={placeholder}
				disabled={disabled}
				onChange={(e) => onChange(e.target.value)}
			/>
			{error ? <p className="TextInput__error">{errorLabel}</p> : null}
		</div>
	);
};

TextInput.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string,
	placeholder: PropTypes.string,
	error: PropTypes.bool,
	errorLabel: PropTypes.string,
	disabled: PropTypes.bool,
	onChange: PropTypes.func
};

export { TextInput };
