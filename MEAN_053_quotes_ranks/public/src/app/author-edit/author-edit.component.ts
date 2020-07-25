import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.scss']
})
export class AuthorEditComponent implements OnInit {
  oneAuthor = {};

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    let observable = this._route.params;
    observable.subscribe(data => {
      //@ts-ignore
      this.getAuthorFromService(data['id'],);
    })
  }

  getAuthorFromService(id) {
    let observable = this._httpService.getAuthor(id);
    observable.subscribe(data => {
      this.oneAuthor = data;
    });
  }

  updateAuthorFromService(id) {
    this._httpService.updateAuthor(this.oneAuthor)
      .subscribe(data => {
      })
    this._router.navigateByUrl('/');
  }
}
