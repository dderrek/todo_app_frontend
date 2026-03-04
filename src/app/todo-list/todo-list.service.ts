import { Injectable } from "@angular/core";
import { Todo } from "../types";
import { Observable, of, throwError } from "rxjs";

const todoLocalStorageKey = 'todos';

@Injectable()
export class TodoListService {

    private todos: Todo[] = [];

    constructor() {
        this.todos = this.getTodosFromLocalStorage();
    }

    getTodos(): Observable<Todo[]> {
        return of([...this.todos]);
    }

    addTodo(): Observable<boolean> {
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            title: '',
            completed: false,
        };
        this.todos.push(newTodo);

        this.writeTodosToLocalStorage();

        return of(true);
    }

    updateTodo(updateTodo: Todo): Observable<boolean> {
        const index = this.todos.findIndex(t => t.id === updateTodo.id);
        if (index === -1) {
            return throwError(() => new Error('todo not found'));
        }

        this.todos[index] = updateTodo;
        this.writeTodosToLocalStorage();
        
        return of(true);
    }

    deleteTodo(id: number): Observable<boolean> {
        this.todos = this.todos.filter(t => t.id !== id);
        this.writeTodosToLocalStorage();

        return of(true);
    }

    private getTodosFromLocalStorage(): Todo[] {
        let todos: Todo[] = [];

        const todosJson = localStorage.getItem(todoLocalStorageKey);
        if (todosJson) {
            todos = JSON.parse(todosJson);
        }

        return todos;
    }

    private writeTodosToLocalStorage(): void {
        if (!this.todos.length) {
            return;
        }

        const todosAsJson = JSON.stringify(this.todos);
        localStorage.setItem(todoLocalStorageKey, todosAsJson);
    }
}
