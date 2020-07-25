import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quote-edit',
  templateUrl: './quote-edit.component.html',
  styleUrls: ['./quote-edit.component.scss']
})
export class QuoteEditComponent implements OnInit {
  oneAuthor: any;
  quoteId: Number;
  oneQuote: any;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    let observable = this._route.params;
    observable.subscribe(data => {
      //@ts-ignore
      this.getAuthorFromService(data.author_id);
      //@ts-ignore
      this.quoteId = data.id;
    })
  }

  getAuthorFromService(id) {
    let observable = this._httpService.getAuthor(id);
    observable.subscribe(data => {
      this.oneAuthor = data;
      //@ts-ignore
      this.oneQuote = this.oneAuthor.quotes[this.quoteId];
    });
  }

  updateQuoteFromService() {
    //@ts-ignore
    this.oneAuthor.quotes[this.quoteId].text = this.oneQuote.text;
    this._httpService.updateAuthor(this.oneAuthor).subscribe(data => {

    });
    this._router.navigateByUrl(`/author/${this.oneAuthor._id}`);
  }

}
