import { updatePost } from 'src/app/modules/posts/state/posts.action';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IPost } from 'src/app/interfaces/posts.interface';
import { getPostById } from '../../state/posts.selector';
import { AppState } from 'src/app/store/app.state';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'],
})
export class EditPostComponent implements OnInit, OnDestroy {
  public post: IPost;
  public postForm: FormGroup;
  public postSubscription: Subscription;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  // , {id: '12'}
    this.store.select(getPostById).subscribe((post) => {
      console.log(post)
      if (post) {
        // this.post;
        this.postForm.patchValue({
          id: post.id,
          title: post.title,
          body: post.body,
        });
      }
    });
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      body: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onSubmit() {
    if (!this.postForm?.valid) {
      return;
    }
    // this.post = new Post();
    // this.post.title = this.postForm.value.title;
    // this.post.body = this.postForm.value.body

    const title = this.postForm.value.title;
    const body = this.postForm.value.body;

    const post: IPost = {
      id: Math.random().toString(),
      title,
      body,
    };

    //dispatch the action
    this.store.dispatch(updatePost({ post }));
    this.router.navigate(['posts']);
  }

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
