import { NgModule } from "@angular/core";
import { TodoListComponent } from "./todo-list.component";
import { AsyncPipe, CommonModule } from "@angular/common";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { FormsModule } from "@angular/forms";
import { TodoListService } from "./todo-list.service";
import { StoreModule } from "@ngrx/store";
import { todoReducer } from "../ngrx/todo.reducers";

@NgModule({
    declarations: [
        TodoListComponent,
        TodoItemComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        AsyncPipe,
        StoreModule.forRoot({ todos: todoReducer }),
    ],
    providers: [
        TodoListService,
    ],
    exports: [TodoListComponent, TodoItemComponent],
})
export class TodoListModule { }