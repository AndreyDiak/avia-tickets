import { UseTicketForm } from '@/app/hooks/useTicketForm';
import { Ticket } from '@/app/typings';
import { curry, getDateOption } from '@/app/utils';
import { DateInput, Input, InputPreview } from '../common';

interface Props extends Pick<UseTicketForm, 'onChange' | 'errors' | 'ticket'> {}

const inputsPreview: Record<keyof Ticket, InputPreview> = {
	cityFrom: {
		label: 'Откуда',
		placeholder: 'Город вылета',
	},
	cityTo: {
		label: 'Откуда',
		placeholder: 'Город прилёта',
	},
	departureDate: {
		label: 'Туда',
		placeholder: 'дд.мм.гг',
	},
	returnDate: {
		label: 'Обратно',
		placeholder: 'дд.мм.гг',
	},
};

export const TicketForm = ({ onChange, errors, ticket }: Props) => {
	const curriedHandler = curry(onChange);

	return (
		<div className="flex space-x-6 justify-center">
			{Object.keys(ticket).map((key, index) => {
				const value = ticket[key as keyof Ticket];
				const preview = inputsPreview[key as keyof Ticket];
				const isError = errors[key as keyof Omit<Ticket, 'returnDate'>];

				if (key === 'departureDate' || key === 'returnDate') {
					const { dateOptions } = getDateOption(key, ticket.departureDate, ticket.returnDate);

					return (
						<DateInput
							key={index}
							label={preview.label}
							value={value as Date}
							dateOptions={dateOptions}
							isError={isError}
							withLine={key === 'departureDate'}
							onChangeHandler={curriedHandler(key)}
						/>
					);
				}

				return (
					<Input
						key={index}
						label={preview.label}
						placeholder={preview.placeholder}
						isError={isError}
						value={value as string}
						onChangeHandler={curriedHandler(key)}
					/>
				);
			})}
		</div>
	);
};
