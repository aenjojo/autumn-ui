import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from '#components';
import { SiStorybook } from 'react-icons/si';
import React from 'react';

const meta = {
	title: 'Autumn/IconButton',
	component: IconButton,
	tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const sbIcon = <SiStorybook size={24} />;

export const Fill: Story = {
	args: {
		label: 'Filled Button',
		variant: 'fill',
		icon: sbIcon,
	},
};

export const Outline: Story = {
	args: {
		label: 'Outlined Button',
		variant: 'outline',
		icon: sbIcon,
	},
};

export const Ghost: Story = {
	args: {
		label: 'Ghost Button',
		variant: 'ghost',
		icon: sbIcon,
	},
};

export const Big: Story = {
	args: {
		label: 'Big Button',
		size: 'big',
		icon: sbIcon,
	},
};

export const Medium: Story = {
	args: {
		label: 'Medium Button',
		size: 'medium',
		icon: sbIcon,
	},
};

export const Small: Story = {
	args: {
		label: 'Small Button',
		size: 'small',
		icon: sbIcon,
	},
};

export const IconOnly: Story = {
	args: {
		label: 'Icon Only Button',
		iconOnly: true,
		icon: sbIcon,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Button',
		variant: 'fill',
		disabled: true,
		icon: sbIcon,
	},
};