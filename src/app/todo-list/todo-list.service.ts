import { Injectable } from "@angular/core";

@Injectable()
export class TodoListService {
    private todos: { id: number; title: string; completed: boolean }[] = [
        { id: 1, title: "Learn Angular", completed: true },
        { id: 2, title: "Build a Todo App", completed: false },
        { id: 3, title: "Test the App", completed: false }
    ];

    getTodos() {
        return this.todos;
    }

    addTodo(title: string) {
        const newTodo = {
            id: this.todos.length + 1,
            title,
            completed: false,
        };
        this.todos.push(newTodo);
    }

    updateTodo(id: number, updatedFields: Partial<{ title: string; completed: boolean }>) {
        const todo = this.todos.find(t => t.id === id);
        if (todo) {
            Object.assign(todo, updatedFields);
        }
    }

    deleteTodo(id: number) {
        this.todos = this.todos.filter(t => t.id !== id);
    }
}
