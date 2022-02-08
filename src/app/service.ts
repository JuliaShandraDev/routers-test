import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor(private http:HttpClient) { }

  getSomeStuff() {
    return this.http.get("https://jsonplaceholder.typicode.com/todos/1")
  }
}
