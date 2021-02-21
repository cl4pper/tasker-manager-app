import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { Box } from './Box';
import { Text } from '@lib';

const stories = storiesOf('Box', module);
stories.addDecorator(withKnobs);

const props = {
	content: <Text content="Hello, Box" />
};

stories.add('Default', () => <Box>{props.content}</Box>);
