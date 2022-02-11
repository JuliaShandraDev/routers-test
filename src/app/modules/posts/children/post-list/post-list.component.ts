import { getPosts, getCount } from '../../state/posts.selector';
import { IPost } from 'src/app/interfaces/posts.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { deletePost, loadPosts } from 'src/app/modules/posts/state/posts.action';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Observable<IPost[]>;
  count: Observable<number>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
    this.posts = this.store.select(getPosts);
    this.count = this.store.select(getCount);
    console.log(this.posts);
  }

  onDeletePost(id: string) {
    if (confirm('Are you sure you want to delete')) {
      this.store.dispatch(deletePost({ id }));
    }
  }
}