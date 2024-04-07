// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login() {
    // Perform authentication logic...

    // Assuming token is received after successful login
    const authToken = 'your_auth_token';

    // Store the token in local storage
    localStorage.setItem('authToken', authToken);

    // Redirect to List of Employee screen
    this.router.navigate(['/employees']);
  }
}
