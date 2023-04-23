import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '#components';

describe('Button', () => {
	test('renders the button', () => {
		render(
			<Button label='Hello' />
		);
	});

	test('renders the label', () => {
		render(
			<Button label='Text' />
		).getByText('Text');
	});

	test('can not clicks the button', () => {
		const handleClick = jest.fn();

		render(
			<Button
				label='Disabled'
				onClick={handleClick}
				disabled
			/>
		);

		fireEvent.click(screen.getByText(/disabled/i));

		expect(handleClick).toHaveBeenCalledTimes(0);
	});
});