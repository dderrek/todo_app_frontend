import { createFeatureSelector, createSelector } from "@ngrx/store";
import { TodoState } from "./todo.reducers";

export const selectState = (state: TodoState) => state;
export const selectTodosState = createFeatureSelector<TodoState>('todos');

export const selectTodos = createSelector(
    selectTodosState, 
    (state: TodoState) => state?.todos,
);
