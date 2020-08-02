import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './location/location.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { HeaderComponent } from './header/header.component';
import { TrackComponent } from './track/track.component';
import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    HeaderComponent,
    TrackComponent,
    ChatInboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
