import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key: string): any {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  setData(key: string, data: TodoItem[]): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
