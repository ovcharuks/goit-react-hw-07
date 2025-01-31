import { createSlice } from "@reduxjs/toolkit";
import { addContactThunk, deleteContact, fetchContacts } from "./operations";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id", name: "name", number: "number" },
      { id: "id1", name: "name1", number: "number1" },
      { id: "id2", name: "name2", number: "number2" },
    ],
    isLoading: false,
    isError: null,
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.isError = action.payload;
    },
    fetchDataSuccess: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  },
});

export const contactsReduser = contactsSlice.reducer;
export const { addContact, setLoading, setError, fetchDataSuccess } =
  contactsSlice.actions;

export const selectFilter = (state) => state.filter;
export const selectIsloading = (state) => state.contacts.isLoading;
export const selectIsError = (state) => state.contacts.isError;
