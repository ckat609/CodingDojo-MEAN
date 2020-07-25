import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorNewComponent } from './author-new/author-new.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import { AuthorIndexComponent } from './author-index/author-index.component';
import { AuthorShowComponent } from './author-show/author-show.component';
import { QuoteNewComponent } from './quote-new/quote-new.component';
import { QuoteEditComponent } from './quote-edit/quote-edit.component';


const routes: Routes = [
  { path: '', component: AuthorIndexComponent },
  { path: 'edit/:id', component: AuthorEditComponent },
  { path: 'new', component: AuthorNewComponent },
  { path: 'author/:id', component: AuthorShowComponent },
  { path: 'quotes/:id', component: QuoteNewComponent },
  { path: 'quotes/:id/edit/:author_id', component: QuoteEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
