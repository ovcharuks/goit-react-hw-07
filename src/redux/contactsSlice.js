import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [
      { id: "id", name: "name", number: "number" },
      { id: "id1", name: "name1", number: "number1" },
      { id: "id2", name: "name2", number: "number2" },
    ],
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
      deleteContact: (state, action) => {
        state.items = state.items.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const contactsReduser = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
