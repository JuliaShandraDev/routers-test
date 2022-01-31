import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

import { GithubService } from 'src/app/services/git/github.service';

@Injectable()
export class UserResolver implements Resolve<Observable<any>> {
  constructor(private userService: GithubService) {}

  resolve(): Observable<any> {
    return this.userService.getUsers();
  }
}
