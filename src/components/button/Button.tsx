import React from 'react';
import clsx from 'clsx';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	variant?: 'fill' | 'outline' | 'ghost';
	size?: 'big' | 'medium' | 'small';
}

export function Button({
	label,
	variant = 'ghost',
	size = 'medium',
	className,
	disabled,
	...props
}: ButtonProps) {
	const buttonStyles = clsx([
		'm-1 rounded border font-semibold',

		variant === 'fill' && 'bg-blue-500 text-slate-50 border-blue-500 hover:bg-blue-700 hover:border-blue-700',
		variant === 'outline' && 'bg-transparent text-blue-500 border-blue-500 hover:bg-blue-200 hover:border-blue-700 hover:text-blue-700',
		variant === 'ghost' && 'bg-transparent text-blue-500 border-transparent hover:bg-blue-200 hover:text-blue-700',

		size === 'big' && 'px-4 py-2',
		size === 'medium' && 'px-3 py-1',
		size === 'small' && 'px-2 py-0.5',

		disabled ? 'filter grayscale cursor-default' : 'cursor-pointer',
		className,
	]);

	return (
		<button
			className={buttonStyles}
			disabled={disabled}
			{...props}
		>
			{label}
		</button>
	);
}