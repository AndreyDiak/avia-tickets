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

const initialTouchedValues: Record<keyof Ticket, boolean> = {
	cityFrom: false,
	cityTo: false,
	departureDate: false,
	returnDate: false,
};

export function useTicketForm(): UseTicketForm {
	const dispatch = useDispatch();

	const router = useRouter();

	const [ticket, setTicket] = useState<Ticket>(initialValue);
	const [touchedFields, setTouchedFields] = useState(initialTouchedValues);

	const onChange = useCallback(
		<T extends keyof Ticket>(field: T, value: Ticket[T]) => {
			setTicket((prev) => ({
				...prev,
				[field]: value,
			}));

			if (touchedFields[field]) return;
			// если мы первый раз обновляем состояние поля
			setTouchedFields((prev) => ({
				...prev,
				[field]: true,
			}));
		},
		[touchedFields],
	);

	const onSubmit = useCallback(() => {
		// если вдруг нажали на submit без touch-а любого из полей
		if (!touchedFields.cityFrom || !touchedFields.cityTo || !touchedFields.departureDate) {
			/*
			 * Сетаем все поля в true чтобы подсветить все ошибки...
			 */
			setTouchedFields((prev) => ({
				...prev,
				cityFrom: true,
				cityTo: true,
				departureDate: true,
			}));
		}
		// если не все поля заполнены...
		if (ticket.cityFrom === '' || ticket.cityTo === '' || !ticket.departureDate) {
			return;
		}
		// если все хорошо
		dispatch(setTicketAction(ticket));
		router.push('/avia/info');
	}, [
		dispatch,
		router,
		ticket,
		touchedFields.cityFrom,
		touchedFields.cityTo,
		touchedFields.departureDate,
	]);

	const errors = useMemo(() => {
		const cityFromError =
			touchedFields.cityFrom && (ticket.cityFrom === '' || !isNaN(Number(ticket.cityFrom)));

		const cityToError =
			touchedFields.cityTo && (ticket.cityTo === '' || !isNaN(Number(ticket.cityTo)));

		return {
			cityFrom: cityFromError,
			cityTo: cityToError,
			departureDate: touchedFields.departureDate && !Boolean(ticket.departureDate),
		};
	}, [
		ticket.cityFrom,
		ticket.cityTo,
		ticket.departureDate,
		touchedFields.cityFrom,
		touchedFields.cityTo,
		touchedFields.departureDate,
	]);

	const isAbleToSubmit = useMemo(
		() => !Object.values(errors).some((item) => Boolean(item)),
		[errors],
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
