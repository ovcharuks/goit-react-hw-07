import axios from "axios";
import { fetchDataSuccess, setError, setLoading } from "./contactsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ErrorMessage } from "formik";
axios.defaults.baseURL = "https://679737b3c2c861de0c6be408.mockapi.io";

// export const fetchContacts = () => async (dispatch) => {
//   try {
//     dispatch(setError(false));
//     dispatch(setLoading(true));
//     const { data } = await axios.get("/contacts");
//     dispatch(fetchDataSuccess(data));
//     dispatch(setLoading(false));
//   } catch (error) {
//     dispatch(setError(true));
//     console.log(error);
//   }
// };

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAllContacts",
  async (body, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
