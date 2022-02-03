import { Post } from 'src/app/model/posts.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http
      .get<Post[]>(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(
        map((data) => {
          const posts: Post[] = [];
          for (let key in data) {
            //@ts-ignore
            posts.push({ ...data[key], id: key });
          }
          return posts;
        })
      );
  }

  addPost(post: Post): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      `https://jsonplaceholder.typicode.com/posts`,
      post
    );
  }

  updatePost(post: Post) {
    const postData = {
      [post.id]: { title: post.title, body: post.body },
    };
    return this.http.patch(
      `https://jsonplaceholder.typicode.com/posts`,
      postData
    );
  }

  deletePost(id: number) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
