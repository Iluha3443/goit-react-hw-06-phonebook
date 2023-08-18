import { configureStore } from "@reduxjs/toolkit";
import {contactSlice} from "./contactsSlice";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const store = configureStore({
    reducer: {
     contacts: contactSlice,   
    }
});


const persistConfig = {
  key: 'root',
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, contactSlice.reducer )
export const localeStorage = configureStore({ reducer: persistedReducer });
export const persistor = persistStore(localeStorage)

