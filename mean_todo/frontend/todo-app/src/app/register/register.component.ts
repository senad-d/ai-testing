import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService) {}

  register(username: string, email: string, password: string) {
    this.authService.register(username, email, password).subscribe(
      response => {
        console.log('Registered successfully', response);
      },
      error => {
        console.error('Registration failed', error);
      }
    );
  }
}