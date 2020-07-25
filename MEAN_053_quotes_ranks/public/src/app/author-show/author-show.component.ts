import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-show',
  templateUrl: './author-show.component.html',
  styleUrls: ['./author-show.component.scss']
})
export class AuthorShowComponent implements OnInit {
  oneAuthor = {};

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,

  ) { }

  ngOnInit() {
    let observable = this._route.params;
    observable.subscribe(data => {
      //@ts-ignore
      this.getAuthorFromService(data.id);
      // console.log(data.id);
    })
  }

  getAuthorFromService(id) {
    let observable = this._httpService.getAuthor(id);
    observable.subscribe(data => {
      this.oneAuthor = data;
    });
  }

  voteFromService(quote, vote) {
    console.log(quote);
    if (quote.rating) {
      quote.rating += vote;
    } else {
      quote.rating = 1;
    }
    //@ts-ignore
    this._httpService.updateAuthor(this.oneAuthor).subscribe(data => { console.log(data) });
  }

  deleteQuoteFromService(index) {
    // console.log(this.oneAuthor);
    //@ts-ignore
    // console.log(this.oneAuthor.quotes.splice(index));
    this.oneAuthor.quotes.splice(index, 1);
    this._httpService.updateAuthor(this.oneAuthor).subscribe(data => { console.log(data) });
  }
}
