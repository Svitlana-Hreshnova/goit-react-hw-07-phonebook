import { configureStore } from "@reduxjs/toolkit";
import { createContacts, createFilter } from "./contactsSlice";



const store = configureStore({
    reducer: {
        contacts: createContacts.reducer,
        filter: createFilter.reducer,
    },
});

export default store;










