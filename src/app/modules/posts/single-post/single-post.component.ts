import { getPostById } from '../state/posts.selector';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.state';
import { Post } from '../../models/posts.model';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
  post: Observable<Post>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // @ts-ignore
    this.post = this.store.select(getPostById);
  }
}
