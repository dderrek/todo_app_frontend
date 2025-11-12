import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Todo } from "../types";

export const todoActions = createActionGroup({
    source: 'todo',
    events: {
        loadTodos: emptyProps(),
        loadTodosSucceeded: props<{ todos: Todo[] }>(),
        loadTodosFailed: props<{ error: any }>(),
    }
});