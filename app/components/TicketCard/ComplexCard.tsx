'use client';
import React from 'react';
import { SingleCard } from '.';
import { TicketPrice } from './TicketPrice';

export const ComplexCard = () => {
	return (
		<div
			className="flex items-center space-x-6 max-w-fit mx-auto rounded-2xl"
			style={{ boxShadow: '0px 0px 14px 0px rgba(112, 121, 153, 0.30)' }}
		>
			<div>
				<SingleCard isSingle={false} direction="to" />
				<SingleCard isSingle={false} direction="from" />
			</div>
			<TicketPrice price={8300} />
		</div>
	);
};
