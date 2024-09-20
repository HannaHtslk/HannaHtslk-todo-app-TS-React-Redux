import { createAsyncThunk } from "@reduxjs/toolkit";
import todoApi from "../../config/todoApi";
import {
  // AddTodoPayload,
  DeleteTodoPayload,
  EditTodoPayload,
  Todo,
  ToggleTodoPayload,
} from "../../todos";
import { AxiosError } from "axios";

export const fetchAllToDosThunk = createAsyncThunk<
  Todo[],
  void,
  { rejectValue: string }
>("todos/fetchAll", async (_, thunkApi) => {
  try {
    const { data } = await todoApi.get<Todo[]>("/tasks");
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const addToDoThunk = createAsyncThunk<
  Todo,
  Todo,
  { rejectValue: string }
>("todos/add", async (body, thunkApi) => {
  try {
    const { data } = await todoApi.post<Todo>("/tasks", body);
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const editToDoThunk = createAsyncThunk<
  Todo,
  EditTodoPayload,
  { rejectValue: string }
>("todos/edit", async ({ id, ...body }, thunkApi) => {
  try {
    const { data } = await todoApi.put<Todo>(`/tasks/${id}`, body);
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const deleteToDoThunk = createAsyncThunk<
  DeleteTodoPayload,
  number,
  { rejectValue: string }
>("todos/delete", async (id, thunkApi) => {
  try {
    await todoApi.delete(`/tasks/${id}`);
    return { id };
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
    return thunkApi.rejectWithValue((error as Error).message);
  }
});

export const toggleCompletedThunk = createAsyncThunk<
  Todo,
  ToggleTodoPayload,
  { rejectValue: string }
>("todos/completed", async ({ id, completed }, thunkApi) => {
  try {
    const { data } = await todoApi.put<Todo>(`/tasks/${id}`, {
      completed: !completed,
    });
    return data;
  } catch (error) {
    if (error instanceof AxiosError && error.response) {
      return thunkApi.rejectWithValue(error.response.data.message);
    }
    return thunkApi.rejectWithValue((error as Error).message);
  }
});
