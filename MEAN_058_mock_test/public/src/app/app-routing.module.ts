import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessIndexComponent } from './business-index/business-index.component';
import { BusinessNewComponent } from './business-new/business-new.component';
import { BusinessEditComponent } from './business-edit/business-edit.component';
import { BusinessShowComponent } from './business-show/business-show.component';


const routes: Routes = [
  { path: "", component: BusinessIndexComponent },
  { path: "new", component: BusinessNewComponent },
  { path: "edit/:id", component: BusinessEditComponent },
  { path: "show/:id", component: BusinessShowComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
