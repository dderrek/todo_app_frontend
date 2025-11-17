import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { Todo } from "../types";

export const todoActions = createActionGroup({
    source: 'todo',
    events: {
        loadTodos: emptyProps(),
        loadTodosSucceeded: props<{ todos: Todo[] }>(),
        loadTodosFailed: props<{ error: any }>(),
        updateTodo: props<{ todo: Todo }>(),
        updateTodoSucceeded: emptyProps(),
        updateTodoFailed: props<{ error: any }>(),
        deleteTodo: props<{ id: number }>(),
        deleteTodoSuceeded: emptyProps(),
        deleteTodoFailed: props<{ error: any }>(),
    }
});