import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.scss']
})
export class QuoteNewComponent implements OnInit {
  oneAuthor: any;
  aQuote: any;


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    let observable = this._route.params;
    observable.subscribe(data => {
      //@ts-ignore
      this.getAuthorFromService(data.id);
      console.log(data);
    })
  }

  getAuthorFromService(id) {
    let observable = this._httpService.getAuthor(id);
    observable.subscribe(data => {
      this.oneAuthor = data;
    });
  }

  addQuoteFromService() {
    let quote = { text: this.aQuote, rating: 0 }
    this.oneAuthor.quotes.push(quote);
    console.log(this.oneAuthor);
    this._httpService.updateAuthor(this.oneAuthor).subscribe(data => console.log(data));
    this._router.navigateByUrl(`/author/${this.oneAuthor._id}`);
  }

}
