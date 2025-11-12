import { createReducer, on, State } from "@ngrx/store"
import { todoActions } from "./todo.actions"
import { Todo } from "../types";

export interface TodoState {
    todos: Todo[],
}

export const initialState: TodoState = {
    todos: [],
}

export const todoReducer = createReducer(
    initialState,
    on(todoActions.loadTodos, state => state),
    on(todoActions.loadTodosSucceeded, (state, { todos }) => ({ ...state, todos })),
);
