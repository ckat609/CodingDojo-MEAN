import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeIndexComponent } from './bike-index/bike-index.component';
import { BikeEditComponent } from './bike-edit/bike-edit.component';
import { BikeNewComponent } from './bike-new/bike-new.component';


const routes: Routes = [
  { path: "", component: BikeIndexComponent },
  { path: "bikes/:id/edit", component: BikeEditComponent },
  { path: "bikes/new", component: BikeNewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
