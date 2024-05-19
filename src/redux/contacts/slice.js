import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import {logOutUser} from "../auth/operations"

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  modalIsOpen: false,
  dataForDelete: {
    idForDelete : "",
    nameForDelete: "",
  }
};

const handlePending = (state) => {
  state.isLoading = true;
}

const handleRejection = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,
  reducers: {
    openModal: {
  reducer(state, action) {
        state.modalIsOpen = true;
        state.dataForDelete.idForDelete = action.payload.id;
        state.dataForDelete.nameForDelete = action.payload.name;

      }
    },
    closeModal: {
      reducer(state) {
        state.modalIsOpen = false;
        state.dataForDelete.idForDelete = "";
        state.dataForDelete.nameForDelete = "";
      }
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejection)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejection)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
         const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.modalIsOpen = false;
      })
      .addCase(deleteContact.rejected, handleRejection)
      .addCase(logOutUser.fulfilled, (state) => {
        state.items = [];
    })
      }
});

export const { openModal, closeModal } = contactsSlice.actions;

export default contactsSlice.reducer;
