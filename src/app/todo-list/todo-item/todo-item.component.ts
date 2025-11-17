import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Todo } from '../../types';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

interface TodoForm {
  id: AbstractControl<number|null>;
  title: AbstractControl<string|null>;
  completed: AbstractControl<boolean|null>;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  standalone: false,
})
export class TodoItemComponent {
  public formGroup!: FormGroup<TodoForm>;
  
  @Input() set item(value: Todo) {
    this.formGroup = new FormGroup({
      id: new FormControl({ value: value.id, disabled: true }),
      title: new FormControl(value.title),
      completed: new FormControl(value.completed),
    });
  }
  @Output() onChange: EventEmitter<Todo> = new EventEmitter();
  @Output() onDelete: EventEmitter<number> = new EventEmitter();

  change(): void {
    this.onChange.emit(this.formGroup.getRawValue());
  }

  delete(): void {
    this.onDelete.emit(this.formGroup.controls['id'].value);
  }
}
