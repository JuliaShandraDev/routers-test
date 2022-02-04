import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PostListComponent} from "./children/post-list/post-list.component";
import {AddPostComponent} from "./children/add-post/add-post.component";
import {EditPostComponent} from "./children/edit-post/edit-post.component";

const routes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
      { path: 'add', component: AddPostComponent },
      {
        path: 'edit/:id',
        component: EditPostComponent,
      },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
