import { configureStore } from "@reduxjs/toolkit";
import { contactsSlice, filterSlice } from "./contactsSlice";

const reducer = {
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer,
};

const store = configureStore({
  reducer,
});

export default store;
