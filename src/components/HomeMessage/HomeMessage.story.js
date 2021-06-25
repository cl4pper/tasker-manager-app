import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { HomeMessage } from './HomeMessage';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

const Props = {
	id: 'storybook-homemessage-component',
	username: 'John Doe',
	message: 'Hello'
};

stories.add('HomeMessage', () => (
	<HomeMessage {...Props} />
));
