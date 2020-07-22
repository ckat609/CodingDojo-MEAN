import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.scss']
})
export class CakeComponent implements OnInit {
  @Input() oneCake: any;
  @Input() oneCakeRating: Number;
  constructor() { }

  ngOnInit() {
  }

}
