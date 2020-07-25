import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ɵBrowserDomAdapter } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'public';
  newNote = {};
  dbErrors = [];
  notes: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getNotesFromService();
  }

  getNotesFromService() {
    let observable = this._httpService.getNotes();
    observable.subscribe(data => {
      console.log(data);
      this.notes = data;
    });
  }

  addNoteFromService() {
    let observable = this._httpService.addNote(this.newNote);
    observable.subscribe(data => {
      this.dbErrors = [];
      //@ts-ignore
      if (data.errors) {
        //@ts-ignore
        console.log(data.errors);
        //@ts-ignore
        for (let i in data.errors) {
          //@ts-ignore
          this.dbErrors.push(data.errors[i].properties.message);
        }
        console.log(this.dbErrors);
      }
      this.getNotesFromService();
    });
  }
}
