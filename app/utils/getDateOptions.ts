export const getDateOption = (
	type: 'departureDate' | 'returnDate',
	depatureDate: Date,
	returnDate: Date | undefined | null,
) => {
	const minDate = type === 'departureDate' ? new Date() : depatureDate;
	const maxDate = type === 'departureDate' ? returnDate ?? null : null;

	const dateOptions = {
		minDate,
		maxDate,
	};
	return { dateOptions };
};
