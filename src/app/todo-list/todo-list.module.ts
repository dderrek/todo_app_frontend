import { NgModule } from "@angular/core";
import { TodoListComponent } from "./todo-list.component";
import { AsyncPipe, CommonModule } from "@angular/common";
import { TodoItemComponent } from "./todo-item/todo-item.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoListService } from "./todo-list.service";
import { StoreModule } from "@ngrx/store";
import { todoReducer } from "../ngrx/todo.reducers";
import { TodoEffects } from "../ngrx/todo.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
    declarations: [
        TodoListComponent,
        TodoItemComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AsyncPipe,
        StoreModule.forFeature('todos', todoReducer),
        EffectsModule.forFeature([ TodoEffects ]),
    ],
    providers: [
        TodoListService,
    ],
    exports: [TodoListComponent, TodoItemComponent],
})
export class TodoListModule { }