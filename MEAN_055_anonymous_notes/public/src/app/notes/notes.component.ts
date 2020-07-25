import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  @Input() notes: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
  }

  deleteNoteFromService(id) {
    let observable = this._httpService.deleteNote(id);
    observable.subscribe(data => {
    });
    this.getNotesFromService();
  }

  strftime(date): String {
    let aDate = new Date(date);
    let aMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let aDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let someDate = `${aDay[aDate.getDay()]} ${aMonth[aDate.getMonth()]} ${aDate.getDate()}, ${aDate.getFullYear()} at ${aDate.getHours()}:${aDate.getMinutes()}`;
    return someDate;
  }

  getNotesFromService() {
    let observable = this._httpService.getNotes();
    observable.subscribe(data => {
      console.log(data);
      this.notes = data;
    });
  }
}
