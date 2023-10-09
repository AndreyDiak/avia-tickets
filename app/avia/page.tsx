'use client';

import { Button, TicketForm } from '../components';
import { useTicketForm } from '../hooks';

export default function Page() {
	const { ticket, isAbleToSubmit, errors, onChange, onSubmit } = useTicketForm();
	return (
		<div className="w-full h-screen pt-16">
			{/* <CalendarIcon color={COLOR} width={40} height={40} /> */}
			<div className="mx-auto max-w-min">
				<div className="bg-[#5C87DB] py-8 px-7 rounded-t-2xl">
					<TicketForm ticket={ticket} errors={errors} onChange={onChange} />
				</div>
				<div className="bg-white shadow-md py-6 px-7 text-right rounded-b-2xl">
					<Button onClick={onSubmit} disabled={!isAbleToSubmit}>
						Найти билеты
					</Button>
				</div>
			</div>
		</div>
	);
}
