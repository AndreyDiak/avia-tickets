import { classNames } from '@/app/utils';
import React, { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	onClick(): void;
	className?: string;
	disabled?: boolean;
}

export const Button = ({ children, className, disabled, onClick }: Props) => {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={classNames('mainButton', className, disabled && 'bg-[#B7BAC1]')}
		>
			{children}
		</button>
	);
};
