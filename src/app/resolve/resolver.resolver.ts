import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import {IStack} from "../interfaces/stack.interface";

@Injectable({
  providedIn: 'root'
})
export class ResolverResolver implements Resolve<Promise<any>>  {
  constructor(private http: HttpClient) {}

  // @ts-ignore
  techList: IStack[] = this.techList;
  resolve() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { res: this.techList };
        resolve(data);
      }, 1000);
    });
  }
}
