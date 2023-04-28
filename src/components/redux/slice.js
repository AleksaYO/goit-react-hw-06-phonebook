import { initialState } from './initialState';
import { createSlice, nanoid } from '@reduxjs/toolkit';
import { Notify } from 'notiflix';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    addContact: {
      reducer(state, { payload }) {
        if (state.contacts.some(item => item.number === payload.number)) {
          Notify.failure('Контакт с таким номером уже существует');
          return;
        } else {
          state.contacts.push(payload);
        }

        console.log(payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: {
      reducer(state, { payload }) {
        state.contacts = state.contacts.filter(item => item.id !== payload);
      },
    },
    filteredContacts(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, deleteContact, filteredContacts } =
  phonebookSlice.actions;

export const phoneReducer = phonebookSlice.reducer;
