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

export const Fill: Story = {
	args: {
		label: 'Filled Button',
		variant: 'fill',
		icon: <SiStorybook />,
	},
};

export const Outline: Story = {
	args: {
		label: 'Outlined Button',
		variant: 'outline',
		icon: <SiStorybook />,
	},
};

export const Ghost: Story = {
	args: {
		label: 'Ghost Button',
		variant: 'ghost',
		icon: <SiStorybook />,
	},
};

export const Big: Story = {
	args: {
		label: 'Big Button',
		size: 'big',
		icon: <SiStorybook />,
	},
};

export const Medium: Story = {
	args: {
		label: 'Medium Button',
		size: 'medium',
		icon: <SiStorybook />,
	},
};

export const Small: Story = {
	args: {
		label: 'Small Button',
		size: 'small',
		icon: <SiStorybook />,
	},
};

export const BigIconOnly: Story = {
	args: {
		label: 'Icon Only Button',
		variant: 'outline',
		size: 'big',
		iconOnly: true,
		icon: <SiStorybook />,
	},
};

export const MediumIconOnly: Story = {
	args: {
		label: 'Icon Only Button',
		variant: 'outline',
		size: 'medium',
		iconOnly: true,
		icon: <SiStorybook />,
	},
};

export const SmallIconOnly: Story = {
	args: {
		label: 'Icon Only Button',
		variant: 'outline',
		size: 'small',
		iconOnly: true,
		icon: <SiStorybook />,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Button',
		variant: 'fill',
		disabled: true,
		icon: <SiStorybook />,
	},
};

export const DisabledIconOnly: Story = {
	args: {
		label: 'Disabled Icon Only Button',
		variant: 'fill',
		disabled: true,
		iconOnly: true,
		icon: <SiStorybook />,
	},
};