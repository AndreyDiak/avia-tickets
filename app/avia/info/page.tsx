'use client';

import { SingleCard } from '@/app/components';
import { ComplexCard } from '@/app/components/TicketCard/ComplexCard';
import { useTicket } from '@/app/hooks';

export default function Page() {
	const { ticket } = useTicket();
	const isSingleTicket = !Boolean(ticket.returnDate);

	if (isSingleTicket) {
		return <SingleCard isSingle={isSingleTicket} direction="to" />;
	}

	return <ComplexCard />;
}
