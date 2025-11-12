import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { todoActions } from "./todo.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { TodoListService } from "../todo-list/todo-list.service";

@Injectable()
export class TodoEffects  {

    constructor(private _actions$: Actions, private _todosService: TodoListService) {}

    loadTodos$ = createEffect(() => 
        this._actions$.pipe(
            ofType(todoActions.loadTodos),
            mergeMap(() => 
                this._todosService.getTodos().pipe(
                    map(res => todoActions.loadTodosSucceeded({ todos: res })),
                    catchError(error => of(todoActions.loadTodosFailed( { error })))
                ),
            )      
        )
    );

    updateTodo = createEffect(() => 
        this._actions$.pipe(
            ofType(todoActions.updateTodo),
            mergeMap(
                (todo) => this._todosService.updateTodo(todo.todo).pipe(
                    map(_ => todoActions.updateTodoSucceeded()),
                    catchError(error => of(todoActions.updateTodoFailed({ error}))),
                )
            )
        )
    );
}

