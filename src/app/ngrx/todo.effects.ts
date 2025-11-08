import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadTodos, loadTodosFailed, loadTodosSucceeded } from "./todo.actions";
import { catchError, map, mergeMap, of, tap } from "rxjs";
import { TodoListService } from "../todo-list/todo-list.service";

@Injectable()
export class TodoEffects  {

    constructor(private _actions$: Actions, private _todosService: TodoListService) {}

    loadTodos$ = createEffect(() => 
        this._actions$.pipe(
            ofType(loadTodos),
            mergeMap(() => 
                this._todosService.getTodos().pipe(
                    tap(res => console.debug('the res is ', res)),
                    map(res => loadTodosSucceeded({ todos: res })),
                    catchError(error => of(loadTodosFailed( { error: error })))
                ),
            )      
        )
    );
}

