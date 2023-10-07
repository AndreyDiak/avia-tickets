import React from 'react';

interface Props {
	airportFrom: string;
	airportTo: string;
	// duration: number;
}

export const TicketLine = React.memo(({ airportFrom, airportTo }: Props) => {
	return (
		<div className="pt-4">
			<span className="w-[270px] h-px bg-[#B7BAC1] relative block">
				<span className="absolute text-[#B7BAC1] -left-4 bottom-0 translate-y-[3px] flex flex-col justify-center items-center">
					<p>{airportFrom}</p>
					<span className="w-2 h-2 rounded-full bg-[#B7BAC1] block"></span>
				</span>
				<span className="absolute text-[#B7BAC1] -right-4 bottom-0 translate-y-[3px] flex flex-col justify-center items-center">
					<p>{airportTo}</p>
					<span className="w-2 h-2 rounded-full bg-[#B7BAC1] block"></span>
				</span>
			</span>
			<h4 className="text-[#B7BAC1] text-center text-sm mt-2">В пути 1ч 55 мин</h4>
		</div>
	);
});

TicketLine.displayName = 'Ticket Line';
