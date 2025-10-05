import { Component, Input, signal } from '@angular/core';
import { Todo } from '../../types';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  standalone: false,
})
export class TodoItemComponent {
  @Input() item: Todo = { id: 0, title: '', completed: false };

  isEdited = signal(false);

  toggleEdit() {
    this.isEdited.set(!this.isEdited());
  }
}
