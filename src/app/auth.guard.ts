// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Check if the user is logged in
    if (localStorage.getItem('authToken')) {
      return true;
    } else {
      // Redirect to login page if not logged in
      this.router.navigate(['/login']);
      return false;
    }
  }
}
