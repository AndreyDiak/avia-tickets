'use client';
import React from 'react';

interface Props {
	time: string;
	city: string;
	date: Date;
}

export const TicketTime = React.memo(({ time, city, date }: Props) => {
	return (
		<div>
			<h2 className="text-2xl font-semibold mb-2">{time}</h2>
			<h4 className="text-[#5C5C5C] text-sm font-semibold">{city}</h4>
			<h4 className="text-[#5C5C5C] text-sm">{date && date.toLocaleDateString()}</h4>
		</div>
	);
});

TicketTime.displayName = 'TicketTime';
