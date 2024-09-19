import { RootState } from "../store";

export const selectTodos = (state: RootState) => state.todos.todos;
export const selectIsLoading = (state: RootState) => state.todos.isLoading;
export const selectIsError = (state: RootState) => state.todos.isError;
