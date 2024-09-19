import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import {
  addToDoThunk,
  deleteToDoThunk,
  editToDoThunk,
  fetchAllToDosThunk,
  toggleCompletedThunk,
} from "./operations";
import { Todo, TodoState } from "../../todos";

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  isError: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchAllToDosThunk.fulfilled,
        (state, action: PayloadAction<Todo[]>) => {
          state.isLoading = false;
          state.todos = action.payload;
        }
      )
      .addCase(addToDoThunk.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.isLoading = false;
        state.todos.push(action.payload);
      })
      .addCase(
        editToDoThunk.fulfilled,
        (state, action: PayloadAction<Todo>) => {
          const todo = state.todos.find(
            (todo) => todo.id === action.payload.id
          );
          if (todo) {
            todo.title = action.payload.title;
          }
        }
      )
      .addCase(
        deleteToDoThunk.fulfilled,
        (state, action: PayloadAction<{ id: number }>) => {
          state.isLoading = false;
          state.todos = state.todos.filter(
            (todo) => todo.id !== action.payload.id
          );
        }
      )
      .addCase(
        toggleCompletedThunk.fulfilled,
        (state, action: PayloadAction<Todo>) => {
          state.isLoading = false;
          const todo = state.todos.find(
            (todo) => todo.id === action.payload.id
          );
          if (todo) {
            todo.completed = action.payload.completed;
          }
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllToDosThunk.pending,
          addToDoThunk.pending,
          editToDoThunk.pending,
          deleteToDoThunk.pending,
          toggleCompletedThunk.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchAllToDosThunk.rejected,
          addToDoThunk.rejected,
          editToDoThunk.rejected,
          deleteToDoThunk.rejected,
          toggleCompletedThunk.rejected
        ),
        (state, action) => {
          state.isError = action.error.message || "An error occurred";
          state.isLoading = false;
        }
      );
  },
});

export const todosReducer = todoSlice.reducer;
