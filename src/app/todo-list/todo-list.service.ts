import { Injectable } from "@angular/core";
import { Todo } from "../types";
import { Observable, of } from "rxjs";

@Injectable()
export class TodoListService {
    private todos: Todo[] = [
        { id: 1, title: "Learn Angular", completed: true },
        { id: 2, title: "Build a Todo App", completed: false },
        { id: 3, title: "Test the App", completed: false }
    ];

    getTodos(): Observable<Todo[]> {
        return of([...this.todos]);
    }

    addTodo(title: string) {
        const newTodo = {
            id: this.todos.length + 1,
            title,
            completed: false,
        };
        this.todos.push(newTodo);
    }

    updateTodo(updateTodo: Todo): Observable<boolean> {
        const index = this.todos.findIndex(t => t.id === updateTodo.id);
        if (index === -1) {
            throw new Error('todo not found');
        }

        this.todos[index] = updateTodo;
        
        return of(true);
    }

    deleteTodo(id: number): void {
        this.todos = this.todos.filter(t => t.id !== id);
    }
}
