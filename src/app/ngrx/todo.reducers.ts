import { createReducer, on } from "@ngrx/store"
import { loadTodos } from "./todo.actions"

export const initialState = {
    todos: [],
}

export const todoReducer = createReducer(
    initialState,
    on(loadTodos, state => state),
);
