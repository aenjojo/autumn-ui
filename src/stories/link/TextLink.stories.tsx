import type { Meta, StoryObj } from '@storybook/react';
import { TextLink } from '#components';

const meta = {
	title: 'Autumn/TextLink',
	component: TextLink,
	tags: ['autodocs'],
} satisfies Meta<typeof TextLink>;

export default meta;

type Story = StoryObj<typeof meta>;

const exampleLink = 'https://aenjojo.dev';

export const Default: Story = {
	args: {
		href: exampleLink,
		label: 'Link',
	},
};