import { Component } from "@angular/core";
import { TodoListService } from "./todo-list.service";
import { Todo } from "../types";
import { Store } from "@ngrx/store";
import { loadTodos } from "../ngrx/todo.actions";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
    standalone: false,
})
export class TodoListComponent {
    todos: Todo[] = [];

    constructor(
        private _todoService: TodoListService,
        private _store: Store<{ todo: Todo[] }>,
    ) {
        this.todos = this._todoService.getTodos();
        let todosFromStore = this._store.select(state => state.todo);
        todosFromStore.subscribe(todos => {
            console.debug('the todos from store are', todos);
        });
    }

    ngOnInit() {
        this._store.dispatch(loadTodos());
    }

}