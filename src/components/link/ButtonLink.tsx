import React from 'react';
import clsx from 'clsx';

export interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	label: string;
	variant?: 'fill' | 'outline' | 'ghost';
	size?: 'big' | 'medium' | 'small';
}

export function ButtonLink({
	href,
	label,
	variant = 'ghost',
	size = 'medium',
	className,
	...props
}: ButtonLinkProps) {
	const buttonLinkStyles = clsx([
		'm-1 rounded border font-semibold cursor-pointer',

		variant === 'fill' && 'bg-blue-500 text-slate-50 border-blue-500 hover:bg-blue-700 hover:border-blue-700',
		variant === 'outline' && 'bg-transparent text-blue-500 border-blue-500 hover:bg-blue-200 hover:border-blue-700 hover:text-blue-700',
		variant === 'ghost' && 'bg-transparent text-blue-500 border-transparent hover:bg-blue-200 hover:text-blue-700',

		size === 'big' && 'px-4 py-2',
		size === 'medium' && 'px-3 py-1',
		size === 'small' && 'px-2 py-0.5',

		className,
	]);

	return (
		<a
			href={href}
			className={buttonLinkStyles}
			{...props}
		>
			{label}
		</a>
	);
}