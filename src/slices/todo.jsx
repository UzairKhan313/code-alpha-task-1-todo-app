import { createSlice, nanoid } from '@reduxjs/toolkit'

// { id: 1, name: 'Learning React', isComplete: false }
const initialState = {
  todos: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        name: action.payload,
        isComplete: false,
      }
      state.todos.push(todo)
    },
    removetodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload)
    },
    toggleComplete: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isComplete: !todo.isComplete }
        } else {
          return todo
        }
      })
    },
  },
})

export const { addTodo, removetodo, toggleComplete } = todoSlice.actions
export default todoSlice.reducer
