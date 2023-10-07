import React from 'react';

export const TicketPrice = React.memo(({ price }: { price: number }) => {
	return (
		<div>
			<h2 className="text-2xl font-bold pr-5">{price} ₽</h2>
		</div>
	);
});

TicketPrice.displayName = 'Ticket Price';
