import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { User } from './User';

const stories = storiesOf('Components', module);
stories.addDecorator(withKnobs);

const Props = {
	id: 'storybook-user-component',
	name: 'John Doe'
};

stories.add('User', () => (
	<User {...Props} />
));
