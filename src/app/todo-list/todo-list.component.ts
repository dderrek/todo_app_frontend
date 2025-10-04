import { Component } from "@angular/core";

@Component({
    selector: "app-todo-list",
    templateUrl: "./todo-list.component.html",
    styleUrls: ["./todo-list.component.scss"],
    standalone: false,
})
export class TodoListComponent {
    title = "todo-list";

    todos = [
        { id: 1, title: "Learn Angular", completed: false },
        { id: 2, title: "Build a Todo App", completed: true },
        { id: 3, title: "Test the App", completed: false }
    ];
}