import React from 'react';
import clsx from 'clsx';

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	label: string;
}

export function TextLink({
	href,
	label,
	className,
	...props
}: TextLinkProps) {
	const textLinkStyles = clsx([
		'font-semibold cursor-pointer underline text-blue-500 hover:text-blue-700',
		className,
	]);

	return (
		<a
			href={href}
			className={textLinkStyles}
			{...props}
		>
			{label}
		</a>
	);
}