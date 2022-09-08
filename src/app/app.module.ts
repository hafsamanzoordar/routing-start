import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { TodoListService } from './services/todo-list.service';
import { StorageService } from './services/storage.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    InputButtonUnitComponent,
    ListManagerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TodoListService, StorageService]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }
