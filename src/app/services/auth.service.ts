import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private _router: Router
  ) { }

  setToken(token:string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: { email: string, password: string }): Observable<string | boolean> {
    if (userInfo.email === 'a@a.com' && userInfo.password === 'admin123') {
      this.setToken('fasdf4t346lb356lb4l536bjvu3456hujvls');
      return of(true);
    }
    return throwError(() => new Error('Failed Login'));
  }

  logout() {
    this._router.navigate(['login']);
  }
}
