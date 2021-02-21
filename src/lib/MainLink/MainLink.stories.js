import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { MainLink } from './MainLink';

const stories = storiesOf('MainLink', module);
stories.addDecorator(withKnobs);

const props = {
	content: 'Google',
	href: 'google.com'
};

stories.add('Default', () => (
	<MainLink content={text('content', props.content, null)} href={text('href', props.href, null)} />
));
