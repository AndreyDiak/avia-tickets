import { useCallback, useMemo } from 'react';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import { Ticket } from '../typings';

interface UseTicket {
	ticket: Ticket;
}

export function useTicket(): UseTicket {
	const rawTicketSelector = useCallback((state: RootState) => state.ticket.ticket, []);
	const rawTicket = useSelector(rawTicketSelector);

	return useMemo(() => {
		return {
			ticket: rawTicket ?? ({} as Ticket),
		};
	}, [rawTicket]);
}
