import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorNewComponent } from './author-new/author-new.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorDeleteComponent } from './author-delete/author-delete.component';
import { AuthorIndexComponent } from './author-index/author-index.component';


const routes: Routes = [
  { path: '', component: AuthorIndexComponent },
  { path: 'edit/:id', component: AuthorEditComponent },
  { path: 'delete/:id', component: AuthorDeleteComponent },
  { path: 'new', component: AuthorNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
