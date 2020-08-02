import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RestaurantNewComponent } from './restaurant-new/restaurant-new.component';
import { RestaurantIndexComponent } from './restaurant-index/restaurant-index.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { RestaurantShowComponent } from './restaurant-show/restaurant-show.component';
import { ReviewNewComponent } from './review-new/review-new.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantNewComponent,
    RestaurantIndexComponent,
    RestaurantEditComponent,
    RestaurantShowComponent,
    ReviewNewComponent,
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
