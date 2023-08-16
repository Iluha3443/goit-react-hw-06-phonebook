import { createSlice, nanoid } from "@reduxjs/toolkit";

export const initialStateContacts = [];

const contactSlice = createSlice({
    name: "contact",
    initialState: initialStateContacts,
    reducers: {
     addContact (state,actions) {
         state.push(actions.payload)
     }

    }
})

export const { addContact } = contactSlice.actions;
  

    // setContacts(contacts => ([...contacts, contact]))