import { createSlice } from '@reduxjs/toolkit';
import { Toaster, toast } from 'react-hot-toast';

const contactSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: { contactInitialState: [] },
  // Об'єкт редюсерів
  reducers: {
    addContacts(state, action) {
      return state.push(action.payload);
    },
  },
});

// Генератори екшенів
export const { addTask, deleteTask, toggleCompleted } = contactSlice.actions;
// Редюсер слайсу
export const contactReducer = contactSlice.reducer;
