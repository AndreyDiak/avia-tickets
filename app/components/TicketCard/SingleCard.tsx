import { useTicket } from '@/app/hooks';
import Image from 'next/image';
import { useState } from 'react';

import logo from '@/public/airlinesLogo.svg';
import { BagIcon, BaggageIcon } from '..';
import { TicketLine } from './TicketLine';
import { TicketPrice } from './TicketPrice';
import { TicketTime } from './TicketTime';
import { TicketTimeList } from './TicketTimeList';

interface Props {
	isSingle: boolean;
	direction: 'to' | 'from';
}

export type Time = {
	start: string;
	end: string;
};

type TicketType = 'single' | 'complex';

const CONFIG: Record<TicketType, Time[]> = {
	single: [
		{
			start: '09:20',
			end: '11:05',
		},
		{
			start: '10:20',
			end: '12:05',
		},
		{
			start: '11:20',
			end: '13:05',
		},
	],
	complex: [
		{
			start: '22:57',
			end: '11:05',
		},
	],
};

export const SingleCard = ({ isSingle, direction }: Props) => {
	const { ticket } = useTicket();

	const [time, setTime] = useState(isSingle ? CONFIG.single[0] : CONFIG.complex[0]);

	const cardStyle = isSingle
		? {
				boxShadow: '0px 0px 14px 0px rgba(112, 121, 153, 0.30)',
		  }
		: {};

	const isLineVisible = !isSingle && direction === 'from';

	const renderLine = () => {
		if (!isLineVisible) return null;
		return (
			<span className="absolute top-0 -left-6 w-[calc(100%+1.5rem)] h-px border-[#5C87DB] border-t border-dashed"></span>
		);
	};

	return (
		<div
			className="flex items-center rounded-2xl mx-auto max-w-fit gap-6 relative"
			style={cardStyle}
		>
			<div className="flex flex-col justify-center items-center px-6 py-7 min-w-[165px]">
				<span className="bg-[#8BA5D8] text-white font-semibold px-6 py-1 left-0 top-0 absolute rounded-tl-2xl rounded-br-2xl">
					Невозвратный
				</span>
				<Image src={logo} alt={'S7 Logo'} />
				<h2 className="mt-2">S7 Airlines</h2>
			</div>
			<div className={`flex gap-6 border-r border-[#DDE3EE] pr-5 relative py-12`}>
				{renderLine()}

				<div className="flex flex-col space-y-6">
					<div className="flex space-x-8">
						<TicketTime
							time={time.start}
							city={direction === 'to' ? ticket.cityFrom : ticket.cityTo}
							date={ticket.departureDate}
						/>
						<TicketLine airportFrom="SVO" airportTo="ROV" />
						<TicketTime
							time={time.end}
							city={direction === 'to' ? ticket.cityTo : ticket.cityFrom}
							date={ticket.departureDate}
						/>
					</div>
					{isSingle && (
						<TicketTimeList list={CONFIG.single} active={time} setActive={setTime} />
					)}
				</div>

				<div className="flex items-end max-h-9 space-x-2">
					<BagIcon color="#8BA5D8" />
					<BaggageIcon color="#8BA5D8" />
				</div>
			</div>
			{isSingle && <TicketPrice price={4150} />}
		</div>
	);
};
