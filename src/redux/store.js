
import { configureStore } from "@reduxjs/toolkit";
import {contactSlice} from "./contactsSlice"; // Обратите внимание на измененный импорт
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer, 
  },
});

export const persistor = persistStore(store);