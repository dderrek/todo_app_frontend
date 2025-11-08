import { Component } from "@angular/core";
import { Todo } from "../types";
import { Store } from "@ngrx/store";
import { loadTodos } from "../ngrx/todo.actions";
import { Observable, of } from "rxjs";
import { selectTodos } from "../ngrx/todo.selectors";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
    standalone: false,
})
export class TodoListComponent {
    todos$: Observable<Todo[]> = of([]);

    constructor(
        private _store: Store<{ todos: Todo[] }>,
    ) {
        this.todos$ = this._store.select(selectTodos);
    }

    ngOnInit() {
        this._store.dispatch(loadTodos());
    }

}