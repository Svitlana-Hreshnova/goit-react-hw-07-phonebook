import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operation";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {
      state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { add, remove } = contactsSlice.actions;

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter: (state, action) => {
      state = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;