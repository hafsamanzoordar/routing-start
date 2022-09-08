import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() item!: TodoItem;
  @Output() remove = new EventEmitter<TodoItem>();
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  editable = false; //can be set false by default
  editableValue!: string;

  @ViewChild('editedItem') set content(content: ElementRef) {
    if(!content) return;
    console.log(content)
    content.nativeElement.focus();
 }
  
  constructor() { }

  ngOnInit(): void {
  }
  
  removeItem(): void {
    this.remove.emit(this.item);
  }

  onEditClick(): void {

    
    this.editable = !this.editable;
    this.editableValue = this.item.title;
  }

//   completeItem(): void {
//     this.update.emit({
//       item: this.item,
//       changes: {completed: !this.item.completed}
//     });
  
// }

saveItem() {
  if (!this.editableValue) return;
  this.editable = false;
  this.item.title = this.editableValue;
}
}
