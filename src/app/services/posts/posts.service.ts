import { IPost } from 'src/app/interfaces/posts.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http
      .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`)
      .pipe(
        map((data) => {
          const posts: IPost[] = [];
          for (let key in data) {
            //@ts-ignore
            posts.push({ ...data[key], id: key });
          }
          console.log(posts)
          return posts;
        })
      );
  }

  addPost(post: IPost): Observable<{ name: string }> {
    return this.http.post<{ name: string }>(
      `https://jsonplaceholder.typicode.com/posts`,
      post
    );
  }

  updatePost(post: IPost) {
    const postData = {
      [post.id]: { title: post.title, body: post.body },
    };
    return this.http.patch(
      `https://jsonplaceholder.typicode.com/posts`,
      postData
    );
  }

  deletePost(id: string) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }

  getPostById(id: string): Observable<IPost> {
    return this.http.get<IPost>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
