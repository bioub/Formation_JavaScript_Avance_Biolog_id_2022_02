import { Component, OnInit } from '@angular/core';
import { Todo } from './todo.model';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todos: Todo[] = [];
  inputValue = '';

  constructor(protected todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.fetchAll().subscribe((todos) => {
      this.todos = todos;
    });
  }

  addTodo() {
    this.todos.push({
      id: Math.random(),
      title: this.inputValue,
      completed: false,
    });
  }
}
