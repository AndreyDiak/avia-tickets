import { classNames } from '@/app/utils';
import React from 'react';
import { Time } from './SingleCard';

interface Props {
	list: Time[];
	active: Time;
	setActive(time: Time): void;
}

export const TicketTimeList = React.memo(({ list, active, setActive }: Props) => {
	return (
		<div className="flex space-x-6">
			{list.map((time, index) => {
				const isActive = time.start === active.start;

				const blockStyle = isActive
					? 'bg-[#DDE3EE] py-2 px-4 scale-y-110'
					: 'border-[#B7BAC1] border  py-1 px-1';

				const textColor = isActive ? 'text-black' : 'text-gray-500';

				return (
					<div
						key={index}
						className={classNames(
							blockStyle,
							'rounded-xl flex items-center space-x-1 cursor-pointer',
						)}
						onClick={() => setActive(time)}
					>
						<span className={`text-lg font-semibold ${textColor}`}>{time.start}</span>
						<span className={textColor}>-</span>
						<span className={classNames(textColor, 'text-sm')}>{time.end}</span>
					</div>
				);
			})}
		</div>
	);
});

TicketTimeList.displayName = 'Ticket Time List';
