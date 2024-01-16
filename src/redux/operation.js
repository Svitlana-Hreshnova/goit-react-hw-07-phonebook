import { createAsyncThunk } from "@reduxjs/toolkit";
import { add, remove } from "./contactsSlice";

export const addContact = createAsyncThunk(
  "items/addContact",
  async function (user, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`https://65a5856952f07a8b4a3f485a.mockapi.io/contacts/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) throw new Error("Can't add contact");

      const data = await response.json();
      dispatch(add(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "items/deleteContact",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`https://65a5856952f07a8b4a3f485a.mockapi.io/contacts/${id}`, { method: "DELETE" });

      if (!response.ok) throw new Error("Can't delete contact");

      dispatch(remove(id));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchContacts = createAsyncThunk(
  "items/fetchContacts",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(`https://65a5856952f07a8b4a3f485a.mockapi.io/contacts`);
      if (!response.ok) throw new Error("Not found");

      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);