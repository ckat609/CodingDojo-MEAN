import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  constructor() { }

  @Input() oneTask: any;
  @Input() delTaskFromService: any;

  ngOnInit(): void {
  }

}
