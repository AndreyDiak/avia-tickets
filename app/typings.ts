export interface Ticket {
	cityFrom: string;
	cityTo: string;
	departureDate: Date;
	returnDate?: Date | null;
}
