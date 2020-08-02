import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantNewComponent } from './restaurant-new/restaurant-new.component';
import { RestaurantIndexComponent } from './restaurant-index/restaurant-index.component';
import { RestaurantEditComponent } from './restaurant-edit/restaurant-edit.component';
import { RestaurantShowComponent } from './restaurant-show/restaurant-show.component';


const routes: Routes = [
  { path: '', component: RestaurantIndexComponent },
  { path: 'new', component: RestaurantNewComponent },
  { path: 'edit/:id', component: RestaurantEditComponent },
  { path: 'show/:id', component: RestaurantShowComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
