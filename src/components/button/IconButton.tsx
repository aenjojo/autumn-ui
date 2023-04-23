import React from 'react';
import clsx from 'clsx';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
	variant?: 'fill' | 'outline' | 'ghost';
	size?: 'big' | 'medium' | 'small';
	icon: JSX.Element;
	iconOnly?: boolean;
}

export function IconButton({
	label,
	variant = 'ghost',
	size = 'medium',
	icon,
	iconOnly,
	className,
	disabled,
	...props
}: IconButtonProps) {
	const buttonStyles = clsx([
		'm-1 rounded border font-semibold flex flex-row justify-center items-center',
		
		variant === 'fill' && 'bg-blue-500 text-slate-50 border-blue-500 hover:bg-blue-700 hover:border-blue-700',
		variant === 'outline' && 'bg-transparent text-blue-500 border-blue-500 hover:bg-blue-200 hover:border-blue-700 hover:text-blue-700',
		variant === 'ghost' && 'bg-transparent text-blue-500 border-transparent hover:bg-blue-200 hover:text-blue-700',
		
		size === 'big' && (
			iconOnly ? 'p-2' : 'pl-3 pr-4 py-2 gap-2'
		),
		size === 'medium' && (
			iconOnly ? 'p-1' : 'pl-2 pr-3 py-1 gap-1'
		),
		size === 'small' && (
			iconOnly ? 'p-0.5' : 'pl-1 pr-2 py-0.5 gap-0.5'
		),

		disabled ? 'filter grayscale cursor-default' : 'cursor-pointer',
		className,
	]);

	return (
		<button
			className={buttonStyles}
			disabled={disabled}
			{...props}
		>
			<span>{icon}</span>
			<span className={iconOnly ? 'sr-only' : ''}>
				{label}
			</span>
		</button>
	);
}