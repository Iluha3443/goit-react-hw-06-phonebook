import { configureStore } from "@reduxjs/toolkit";
import {initialStateContacts} from "./contactsSlice"

export const store = configureStore({
    contacts: initialStateContacts,
    filter: ""
});
