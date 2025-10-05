import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  standalone: false,
})
export class TodoItemComponent {
  @Input() item: any;

  isEdited = signal(false);

  toggleEdit() {
    this.isEdited.set(!this.isEdited());
  }
}
