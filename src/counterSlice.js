import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'counter',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now().toString(),
        title: action.payload,
        completed: false,
      };
      state.push(newTodo);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  }
});

export const {
  addTodo, toggleTodo, deleteTodo
} = todoSlice.actions;

export default todoSlice.reducer;
