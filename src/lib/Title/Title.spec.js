import React from 'react';
import { render, screen } from '@testing-library/react';

import { Title } from './Title';

const children = 'Title content';

describe('[lib] Title:', () => {
	it('should be rendered', () => {
		const { container } = render(<Title>{children}</Title>);

		expect(container.firstChild.className).toBe('Title');
	});

	it('should render the text content', () => {
		const { getByText } = render(<Title>{children}</Title>);

		expect(getByText(children).textContent).toBe('Title content');
	});

	it('should apply tall style when tall prop is set', () => {
		const { container } = render(<Title tall>{children}</Title>);

		expect(container.firstChild.classList.contains('Title--tall')).toBeTruthy();
	});

	it('should apply small style when small prop is set', () => {
		const { container } = render(<Title small>{children}</Title>);

		expect(container.firstChild.classList.contains('Title--small')).toBeTruthy();
	});

	it('should apply bold style when bold prop is set', () => {
		const { container } = render(<Title bold>{children}</Title>);

		expect(container.firstChild.classList.contains('Title--bold')).toBeTruthy();
	});

	it('should apply italic style when italic prop is set', () => {
		const { container } = render(<Title italic>{children}</Title>);

		expect(container.firstChild.classList.contains('Title--italic')).toBeTruthy();
	});

	it('should apply underline style when underline prop is set', () => {
		const { container } = render(<Title underline>{children}</Title>);

		expect(container.firstChild.classList.contains('Title--underline')).toBeTruthy();
	});

	it('should apply center alignment when center prop is set', () => {
		const { container } = render(<Title center>{children}</Title>);

		expect(container.firstChild.classList.contains('Title--center')).toBeTruthy();
	});

	it('should apply right alignment when right prop is set', () => {
		const { container } = render(<Title right>{children}</Title>);

		expect(container.firstChild.classList.contains('Title--right')).toBeTruthy();
	});

	it('should NOT apply any alignment when right and ceter props are set', () => {
		const { container } = render(
			<Title right center>
				{children}
			</Title>
		);

		expect(container.firstChild.classList.contains('Title--right')).toBeFalsy();
		expect(container.firstChild.classList.contains('Title--center')).toBeFalsy();
	});
});
