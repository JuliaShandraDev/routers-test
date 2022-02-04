import { addPost } from 'src/app/modules/posts/state/posts.action';
import { IPost } from 'src/app/interfaces/posts.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  public postForm: FormGroup;
  public bodyForm: any;

  constructor(private store: Store<AppState>,private router: Router) {}

  ngOnInit(): void {
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





  // @ts-ignore
  public showBodyErrors() {
    this.postForm?.get('body');

    if (this.bodyForm?.touched && !this.bodyForm?.valid) {

      if (this.bodyForm?.errors?.required) {
        return 'Body is required';
      }

      if (this.bodyForm?.errors?.minlength) {
        return 'Body should be of minimum 10 characters length';
      }
    }
  }

  onAddPost() {
    if (!this.postForm?.valid) {
      return;
    }

    const post: { id: string; body: string; title: string } = {
      id: this.postForm.value.id,
      title: this.postForm.value.title,
      body: this.postForm.value.body,
    };

    this.store.dispatch(addPost({ post }));
    this.router.navigate(['posts']);
  }
}
