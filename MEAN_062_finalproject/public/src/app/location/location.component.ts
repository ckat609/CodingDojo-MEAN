import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  @Input() location: any;
  @Input() avatar: String;


  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {


  }


  locationImage(aString): String {
    let imgName = "";
    for (let i = 0; i < aString.length; i++) {
      if (aString[i] != " ") {
        imgName += aString[i].toLowerCase();
      }
    }
    console.log(`./../static/images/${imgName}.jpg`);

    return `/assets/images/${imgName}.jpg`;
  }



}
