import type { Meta, StoryObj } from '@storybook/react';
import { ButtonLink } from '#components';

const meta = {
	title: 'Autumn/ButtonLink',
	component: ButtonLink,
	tags: ['autodocs'],
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;

const exampleLink = 'https://aenjojo.dev';

export const Fill: Story = {
	args: {
		href: exampleLink,
		label: 'Filled Button',
		variant: 'fill',
	},
};

export const Outline: Story = {
	args: {
		href: exampleLink,
		label: 'Outlined Button',
		variant: 'outline',
	},
};

export const Ghost: Story = {
	args: {
		href: exampleLink,
		label: 'Ghost Button',
		variant: 'ghost',
	},
};

export const Big: Story = {
	args: {
		href: exampleLink,
		label: 'Big Button',
		size: 'big',
	},
};

export const Medium: Story = {
	args: {
		href: exampleLink,
		label: 'Medium Button',
		size: 'medium',
	},
};

export const Small: Story = {
	args: {
		href: exampleLink,
		label: 'Small Button',
		size: 'small',
	},
};