import { NgModule } from "@angular/core";
import { TodoListComponent } from "./todo-list.component";
import { CommonModule } from "@angular/common";
import { TodoItemComponent } from "./todo-item/todo-item.component";

@NgModule({
    declarations: [
        TodoListComponent,
        TodoItemComponent,
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    exports: [TodoListComponent, TodoItemComponent],
})
export class TodoListModule { }