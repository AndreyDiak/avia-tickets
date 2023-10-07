import { useCallback, useMemo, useState } from 'react';
import { Ticket } from '../typings';
import { useDispatch } from 'react-redux';
import { setTicket as setTicketAction } from '../features/ticketSlice';
import { useRouter } from 'next/navigation';

type FormErrors = Record<keyof Omit<Ticket, 'returnDate'>, boolean>;

export interface UseTicketForm {
	ticket: Ticket;
	errors: FormErrors;
	isAbleToSubmit: boolean;
	onChange<T extends keyof Ticket>(field: T, value: Ticket[T]): void;
	onSubmit(): void;
}

const initialValue: Ticket = {
	cityFrom: '',
	cityTo: '',
	departureDate: new Date(),
	returnDate: null,
};

export function useTicketForm(): UseTicketForm {
	const dispatch = useDispatch();

	const router = useRouter();

	const [ticket, setTicket] = useState<Ticket>(initialValue);
	const [isTouched, setIsTouched] = useState(false);

	const onChange = useCallback(
		<T extends keyof Ticket>(field: T, value: Ticket[T]) => {
			setTicket((prev) => ({
				...prev,
				[field]: value,
			}));
			if (isTouched) return;
			setIsTouched(true);
		},
		[isTouched],
	);

	const onSubmit = useCallback(() => {
		// если вдруг нажали на submit без touch-а любого из полей
		if (!isTouched) {
			setIsTouched(true);
		}
		// если не все поля заполнены...
		if (ticket.cityFrom === '' || ticket.cityTo === '' || !ticket.departureDate) {
			return;
		}
		// если все хорошо
		dispatch(setTicketAction(ticket));
		router.push('/avia/info');
	}, [dispatch, isTouched, router, ticket]);

	const errors = useMemo(() => {
		if (!isTouched) {
			return {} as FormErrors;
		}
		return {
			cityFrom: ticket.cityFrom === '' || !isNaN(Number(ticket.cityFrom)),
			cityTo: ticket.cityTo === '' || !isNaN(Number(ticket.cityTo)),
			departureDate: !Boolean(ticket.departureDate),
		};
	}, [isTouched, ticket.cityFrom, ticket.cityTo, ticket.departureDate]);

	const isAbleToSubmit = useMemo(
		() => !isTouched || !Object.values(errors).some((item) => Boolean(item)),
		[errors, isTouched],
	);

	return useMemo(() => {
		return {
			ticket,
			errors,
			isAbleToSubmit,
			onChange,
			onSubmit,
		};
	}, [errors, isAbleToSubmit, onChange, onSubmit, ticket]);
}
