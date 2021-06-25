import React from 'react';
import { render } from '@testing-library/react';
import * as utils from './utils';

import { HomeMessage } from './HomeMessage';

let props;
let component;

describe('HomeMessage component', () => {
	beforeAll(() => {
		component = props => {
			return <HomeMessage {...props} />;
	  	};

	  	props = {
			id: 'homemessage-profile-id',
			username: 'John Doe',
	  	};
	});

	describe('should render title', () => {
		it('for empty username', () => {
			const { queryByTestId } = render(component({
				...props,
				username: ''
			}));

			const wrapper = queryByTestId(`${props.id}-title-testid`);
			expect(wrapper).toBeTruthy();
			expect(wrapper.textContent).toBe('Welcome, User.');
		  });

		  it('for existing username', () => {
			const { queryByTestId } = render(component(props));

			const wrapper = queryByTestId(`${props.id}-title-testid`);
			expect(wrapper).toBeTruthy();
			expect(wrapper.textContent).toBe(`Welcome, ${props.username}.`);
		  });
	});

	describe('should render message', () => {
		it('if does not exist boards', () => {
			const { queryByTestId } = render(component(props));

			const wrapper = queryByTestId(`${props.id}-message-testid`);
			expect(wrapper).toBeTruthy();
			expect(wrapper.textContent).toBe(utils.messageForEmptyBoard);
		});

		it('if exist boards', () => {
			const { queryByTestId } = render(component({
					...props,
					hasBoards: true
				}));

			const wrapper = queryByTestId(`${props.id}-message-testid`);
			expect(wrapper).toBeTruthy();
			expect(wrapper.textContent).toBe(utils.messageWithBoards);
		});
	});
});
