import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private baseUrl = 'http://localhost:5000/api/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.baseUrl);
  }

  createTodo(todo: Partial<Todo>): Observable<Todo> {
    return this.http.post<Todo>(this.baseUrl, todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    return this.http.put<Todo>(`${this.baseUrl}/${todo._id}`, todo);
  }

  deleteTodo(todoId: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${todoId}`);
  }
}