import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(
      todos => {
        this.todos = todos;
      },
      error => {
        console.error('Failed to load todos', error);
      }
    );
  }

  addTodo(title: string, description: string) {
    this.todoService.createTodo({ title, description }).subscribe(
      todo => {
        this.todos.push(todo);
      },
      error => {
        console.error('Failed to add todo', error);
      }
    );
  }

  updateTodo(todo: Todo) {
    this.todoService.updateTodo(todo).subscribe(
      updatedTodo => {
        const index = this.todos.findIndex(t => t._id === updatedTodo._id);
        this.todos[index] = updatedTodo;
      },
      error => {
        console.error('Failed to update todo', error);
      }
    );
  }

  deleteTodo(todoId: string) {
    this.todoService.deleteTodo(todoId).subscribe(
      response => {
        this.todos = this.todos.filter(todo => todo._id !== todoId);
      },
      error => {
        console.error('Failed to delete todo', error);
      }
    );
  }
}