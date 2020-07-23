import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { CakeComponent } from './cake/cake.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'public';
  newCake = {};
  cakes = [];
  newComment = {};
  oneCake: any;
  oneCakeRating: Number;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getCakesFromService();
  }

  getCakesFromService() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log(data['cakes']);
      this.cakes = data['cakes'];
    });
  }

  addCakeFromService() {
    let observable = this._httpService.addCake(this.newCake);
    observable.subscribe(data => {
      console.log("COMPONENT");
      console.log(data);
    });
    this.getCakesFromService();
  }

  addCommentFromService(e, id) {
    this.newComment = {
      comment: e.target.comment.value,
      rating: Number(e.target.rating.value)
    };
    // console.log(this.newComment);
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.rating.value);
    // console.log(e.target.comment.value);
    let observable = this._httpService.addComment(id, this.newComment);
    observable.subscribe(data => {
      console.log(data);
    });
    this.showCakeFromService(id);
  }

  showCakeFromService(id) {
    let observable = this._httpService.showCake(id);
    observable.subscribe(data => {

      //@ts-ignore
      console.log(data.comments.length);
      let sum = 0;
      //@ts-ignore
      for (let i = 0; i < data.comments.length; i++) {
        //@ts-ignore
        sum += data.comments[i].rating;
      }

      //@ts-ignore
      this.oneCakeRating = sum / data.comments.length;
      this.oneCake = data;
    });

  }
}
