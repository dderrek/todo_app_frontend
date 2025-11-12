import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Todo } from '../../types';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  standalone: false,
})
export class TodoItemComponent {
  public formGroup!: FormGroup;

  @Input() set item(value: Todo) {
    this.formGroup = new FormGroup({
      id: new FormControl({ value: value.id, disabled: true }),
      title: new FormControl(value.title),
      completed: new FormControl(value.completed),
    });
  }
  @Output() onChange: EventEmitter<Todo> = new EventEmitter();

  change(): void {
    debugger;
    this.onChange.emit(this.formGroup.getRawValue());
  }
}
