import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private _http: HttpClient
  ) { }

  getPersonList() {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users?_start=0&_limit=5');
  }

  getPerson(id: number) {
    return this._http.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`);
  }
}
