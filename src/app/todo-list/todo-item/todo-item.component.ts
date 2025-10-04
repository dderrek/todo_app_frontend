import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  standalone: false,
})
export class TodoItemComponent {
  @Input() item: any;
}
