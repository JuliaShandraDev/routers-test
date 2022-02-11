import { getPostById } from '../../state/posts.selector';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { IPost } from 'src/app/interfaces/posts.interface';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss'],
})
export class SinglePostComponent implements OnInit {
  post: Observable<IPost>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    // @ts-ignore
    this.post = this.store.select(getPostById);
  }
}