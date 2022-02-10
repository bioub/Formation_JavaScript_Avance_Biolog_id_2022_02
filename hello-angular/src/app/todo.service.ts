import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(protected httpClient: HttpClient) { }

  fetchAll() {
    return this.httpClient.get<Todo[]>('http://localhost:3000/todos');
  }
}
