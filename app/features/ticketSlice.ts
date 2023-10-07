import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Ticket } from '../typings';

export interface TicketState {
	ticket: Ticket | null;
}

const initialState: TicketState = {
	ticket: null,
};

export const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {
		setTicket: (state, action: PayloadAction<Ticket>) => {
			state.ticket = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setTicket } = ticketSlice.actions;

export default ticketSlice.reducer;
