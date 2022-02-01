import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class GithubService {
  private url = 'https://api.github.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get(this.url).pipe(delay(2000)).pipe();
  }
}
