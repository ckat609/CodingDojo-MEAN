import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author-new',
  templateUrl: './author-new.component.html',
  styleUrls: ['./author-new.component.scss']
})
export class AuthorNewComponent implements OnInit {
  authors: any;
  newAuthor = {};
  errors: any;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {

  }

  addAuthorFromService() {
    let observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe(data => {
      console.log(data);
      //@ts-ignore
      if (data.errors) {
        //@ts-ignore
        this.errors = data.errors.name.properties.message;
        //@ts-ignore
        console.log(data.errors.name.properties.message);
      } else {
        this._router.navigate(['/']);
      }
    });
  }
}
