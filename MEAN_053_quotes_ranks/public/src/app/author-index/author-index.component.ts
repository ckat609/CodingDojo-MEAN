import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-index',
  templateUrl: './author-index.component.html',
  styleUrls: ['./author-index.component.scss']
})
export class AuthorIndexComponent implements OnInit {
  authors: any;
  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAuthorsFromService();
  }

  getAuthorsFromService() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      this.authors = data['authors'];
    });
  }

  deleteAuthorFromService(id) {
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
    });
    this.getAuthorsFromService();
  }


}
