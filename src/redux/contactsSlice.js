import { createSlice, nanoid } from "@reduxjs/toolkit";

 export const contactSlice = createSlice({
    name: "contacts",
    initialState: {
        contacts: [],
        filter: "",
    },
    reducers: {
        handleSubmit(state, actions) {
            state.contacts.push({
                id: nanoid(),
                name: actions.payload.name,
                number: actions.payload.number
            })
        },
        deleteNumber(state, actions) {
            state.contacts = state.contacts.filter(contact => contact.id !== actions.payload)
        },
        filteredContacts(state, actions) {
            state.filter = state.contacts.filter(contact => contact.name.toLowerCase().includes(actions.payload))
        },
    }
});

export const { handleSubmit, deleteNumber, filteredContacts } = contactSlice.actions;
  

