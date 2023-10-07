'use client';
import React from 'react';
import DatePicker from 'react-datepicker';
import { CalendarIcon, InputPreview } from '.';

interface Props extends InputPreview {
	value: Date;
	withLine?: boolean;
	dateOptions: { minDate: Date | null; maxDate: Date | null };
	onChangeHandler(value: Date): void;
}

export const DateInput = React.memo(
	({ label, value, isError, dateOptions, withLine, onChangeHandler }: Props) => {
		const renderLine = () => {
			if (!withLine) return null;
			return (
				<span className="w-full h-px border-b border-dashed absolute top-1/2 -translate-y-1/2 left-1/2 z-0" />
			);
		};

		const renderError = () => {
			if (!isError) return null;
			return (
				<span className="text-red-500 text-xs absolute -bottom-4 left-0">
					{Boolean(value) ? 'Обязательное поле' : 'Неправильный формат'}
				</span>
			);
		};

		return (
			<div className="relative">
				<span className="text-xs text-white absolute -top-4">{label}</span>
				<span className="text-xs text-white absolute top-1/2 -translate-y-1/2 left-3 z-20">
					<CalendarIcon color={Boolean(value) ? '#5C87DB' : '#5C5C5C'} />
				</span>
				<DatePicker
					minDate={dateOptions?.minDate}
					maxDate={dateOptions?.maxDate}
					value={value && (value as Date).toLocaleDateString()}
					onChange={(value) => onChangeHandler(value ?? (dateOptions?.minDate as Date))}
					className="mainInput pl-10"
					placeholderText="дд.мм.гг"
				/>
				{renderLine()}
				{renderError()}
			</div>
		);
	},
);

DateInput.displayName = 'DateInput';
