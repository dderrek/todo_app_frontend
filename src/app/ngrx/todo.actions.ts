import { createAction, props } from "@ngrx/store";
import { Todo } from "../types";

export const loadTodos = createAction('[Todo] Load Todos');

export const loadTodosSucceeded = createAction('[Todo] Load Todos Succeeded', props<{ todos: Todo[] }>());
export const loadTodosFailed = createAction('[Todo] Load Todos Failed', props<{ error: any }>())