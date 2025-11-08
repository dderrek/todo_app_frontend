import { createReducer, on, State } from "@ngrx/store"
import { loadTodos, loadTodosSucceeded } from "./todo.actions"
import { Todo } from "../types";

export interface TodoState {
    todos: Todo[],
}

export const initialState: TodoState = {
    todos: [],
}

export const todoReducer = createReducer(
    initialState,
    on(loadTodos, state => state),
    on(loadTodosSucceeded, (state, { todos }) => ({ ...state, todos })),
);
