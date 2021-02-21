import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { Checkbox } from './Checkbox';

const stories = storiesOf('Checkbox', module);
stories.addDecorator(withKnobs);

const props = {
	checked: true
};

stories.add('Default', () => <Checkbox checked={boolean('checked', props.checked)} />);
