import React, { ReactNode } from 'react';

export interface InputPreview {
	label: ReactNode;
	placeholder?: string;
	isError?: boolean;
}

interface Props extends InputPreview {
	value: string;
	onChangeHandler(value: string): void;
}

export const Input = React.memo(
	({ value, placeholder, label, isError, onChangeHandler }: Props) => {
		const renderError = () => {
			if (!isError) return null;
			return (
				<span className="text-red-500 text-xs absolute -bottom-4 left-0">
					{value === '' ? 'Обязательное поле' : 'Неправильный формат'}
				</span>
			);
		};

		return (
			<div className="relative">
				<span className="text-xs text-white absolute -top-4">{label}</span>

				<input
					type="text"
					placeholder={placeholder}
					value={value as string}
					onChange={(e) => onChangeHandler(e.target.value)}
					className={`mainInput pl-3`}
				/>

				{renderError()}
			</div>
		);
	},
);

Input.displayName = 'Input';
