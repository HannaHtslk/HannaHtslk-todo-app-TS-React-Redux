export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoState {
  todos: Todo[];
  isLoading: boolean;
  isError: boolean | string;
}

export interface AddTodoPayload {
  title: string;
}

export interface EditTodoPayload {
  id: number;
  title: string;
}

export interface ToggleTodoPayload {
  id: number;
  completed: boolean;
}

export interface DeleteTodoPayload {
  id: number;
}

export interface fetchAllTodosResponse {
  todos: Todo[];
}
