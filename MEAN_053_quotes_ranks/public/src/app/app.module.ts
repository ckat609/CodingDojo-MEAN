import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthorNewComponent } from './author-new/author-new.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorIndexComponent } from './author-index/author-index.component';
import { AuthorShowComponent } from './author-show/author-show.component';
import { QuoteNewComponent } from './quote-new/quote-new.component';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorNewComponent,
    AuthorEditComponent,
    AuthorIndexComponent,
    AuthorShowComponent,
    QuoteNewComponent,
    QuoteEditComponent
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
