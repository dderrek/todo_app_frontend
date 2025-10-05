import { Component } from "@angular/core";
import { TodoListService } from "./todo-list.service";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
    standalone: false,
})
export class TodoListComponent {
    todos: any[] = [];

    constructor(
        private _todoService: TodoListService,
    ) {
        this.todos = this._todoService.getTodos();
    }

}