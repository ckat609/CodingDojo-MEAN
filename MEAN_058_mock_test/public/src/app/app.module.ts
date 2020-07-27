import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BusinessIndexComponent } from './business-index/business-index.component';
import { BusinessNewComponent } from './business-new/business-new.component';
import { BusinessEditComponent } from './business-edit/business-edit.component';
import { BusinessShowComponent } from './business-show/business-show.component';
import { ReviewNewComponent } from './review-new/review-new.component'

@NgModule({
  declarations: [
    AppComponent,
    BusinessIndexComponent,
    BusinessNewComponent,
    BusinessEditComponent,
    BusinessShowComponent,
    ReviewNewComponent
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
