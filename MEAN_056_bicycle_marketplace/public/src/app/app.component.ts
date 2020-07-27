import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';
  aBikeId: String;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.aBikeId = "5f1ce22773fd504cc41e2f34";
  }
}
