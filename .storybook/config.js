import { configure } from '@storybook/react';

const lib = require.context('@lib', true, /\.stories\.js$/);

function loadStories() {
	lib.keys().forEach((filename) => lib(filename));
}

configure(loadStories, module);
