import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, { username, email, password });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, password });
  }
}