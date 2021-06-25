import React from 'react';
import { render } from '@testing-library/react';

import { User } from './User';

let props;
let component;

describe('User component', () => {
	beforeAll(() => {
		component = props => {
			return <User {...props} />;
	  	};

	  	props = {
			id: 'user-profile-id',
			name: 'User Profile'
	  	};
	});

	it('should render user name', () => {
	  const { queryByText } = render(component(props));

	  expect(queryByText('User Profile').textContent).toBeTruthy();
	});

	it('should render Username without name prop', () => {
		const { queryByText } = render(component());

		expect(queryByText('Username').textContent).toBeTruthy();
	});

	it('should render link to logout', () => {
		const { queryByText } = render(component(props));

		expect(queryByText('Logout').textContent).toBeTruthy();
	});

	it('should user photo', () => {
		const { queryByTestId } = render(component(props));

		expect(queryByTestId(`${props.id}-photo-testid`)).toBeTruthy();
	});
});
