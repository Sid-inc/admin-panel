import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.scss']
})
export class ContactsDetailComponent implements OnInit {

  public id!: number;
  public user!: Observable<User>;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user = this._activatedRoute.data.pipe(map((data) => data?.['user']));
  }
}
