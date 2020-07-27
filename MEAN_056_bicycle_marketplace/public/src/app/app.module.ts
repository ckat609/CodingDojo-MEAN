import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BikeShowComponent } from './bike-show/bike-show.component';
import { BikeIndexComponent } from './bike-index/bike-index.component';
import { BikeEditComponent } from './bike-edit/bike-edit.component';
import { BikeNewComponent } from './bike-new/bike-new.component'

@NgModule({
  declarations: [
    AppComponent,
    BikeShowComponent,
    BikeIndexComponent,
    BikeEditComponent,
    BikeNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
