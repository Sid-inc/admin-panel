import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { filter, mapTo, merge, Observable } from 'rxjs';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _showLoader!: Observable<boolean>;
  private _hideLoader!: Observable<boolean>;
  public isLoading!: Observable<boolean>;

  constructor(
    private _authService: AuthService,
    private _router: Router,
  ) { }

  logout() {
    this._authService.logout();
  }

  ngOnInit(): void {
    this._hideLoader = this._router.events.pipe(filter((e) => e instanceof ResolveEnd), mapTo(false));
    this._showLoader = this._router.events.pipe(filter((e) => e instanceof ResolveStart), mapTo(true));
    this.isLoading = merge(this._hideLoader, this._showLoader);
  }
}
