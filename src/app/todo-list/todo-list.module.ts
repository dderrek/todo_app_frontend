import { NgModule } from "@angular/core";
import { TodoListComponent } from "./todo-list.component";
import { CommonModule } from "@angular/common";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { FormsModule } from "@angular/forms";
import { TodoListService } from "./todo-list.service";

@NgModule({
    declarations: [
        TodoListComponent,
        TodoItemComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    providers: [
        TodoListService,
    ],
    exports: [TodoListComponent, TodoItemComponent],
})
export class TodoListModule { }