import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '#components';

const meta = {
	title: 'Autumn/Button',
	component: Button,
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fill: Story = {
	args: {
		label: 'Filled Button',
		variant: 'fill',
	},
};

export const Outline: Story = {
	args: {
		label: 'Outlined Button',
		variant: 'outline',
	},
};

export const Ghost: Story = {
	args: {
		label: 'Ghost Button',
		variant: 'ghost',
	},
};

export const Big: Story = {
	args: {
		label: 'Big Button',
		size: 'big',
	},
};

export const Medium: Story = {
	args: {
		label: 'Medium Button',
		size: 'medium',
	},
};

export const Small: Story = {
	args: {
		label: 'Small Button',
		size: 'small',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Button',
		variant: 'fill',
		disabled: true,
	},
};