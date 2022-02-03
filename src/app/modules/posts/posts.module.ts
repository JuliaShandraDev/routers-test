import { PostsEffects } from 'src/app/modules/posts/state/posts.effects';
import { EffectsModule } from '@ngrx/effects';
import { POST_STATE_NAME } from './state/posts.selector';
import { EditPostComponent } from './children/edit-post/edit-post.component';
import { AddPostComponent } from './children/add-post/add-post.component';
import { PostListComponent } from './children/post-list/post-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { postsReducer } from './state/posts.reducer';
import { SinglePostComponent } from './children/single-post/single-post.component';
import {RouterModule} from "@angular/router";
import {PostsRoutingModule} from "./posts-routing.module";


@NgModule({
  declarations: [
    PostListComponent,
    AddPostComponent,
    EditPostComponent,
    SinglePostComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(POST_STATE_NAME, postsReducer),
    EffectsModule.forFeature([PostsEffects]),
    RouterModule,
    PostsRoutingModule
  ],
  exports: [
    PostListComponent
  ]
})
export class PostsModule {}
