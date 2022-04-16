import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, delay, EMPTY, Observable, of } from 'rxjs';
import { User } from '../user';
import { AdminService } from '../services/admin.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolver implements Resolve<User[]> {
  constructor(
    private _adminService: AdminService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this._adminService.getPersonList().pipe(
      delay(2000)
    )
  }
}
