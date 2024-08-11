
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const contactSlice = createSlice({
    name: 'contacts',
    initialState: [] as Contact[],
    reducers: {
        addContact: (state, action: PayloadAction<Contact>) => {
            state.push(action.payload);
        },
        removeContact: (state, action: PayloadAction<number>) => {
            return state.filter(contact => contact.id !== action.payload);
        },
        editContact: (state, action: PayloadAction<Contact>) => {
            return state.map(contact =>
                contact.id === action.payload.id ? action.payload : contact
            );
        },
    },
});

export const { addContact, removeContact, editContact } = contactSlice.actions;
export default contactSlice.reducer;
