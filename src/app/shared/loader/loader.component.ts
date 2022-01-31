import { Component } from "@angular/core";
import {HTTP_INTERCEPTORS, HttpClient} from "@angular/common/http";
import {LoaderService} from "../../services/loader/loader.service";
import {map, mergeMap, pipe, switchMap} from "rxjs";
import {ajax} from "rxjs/ajax";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: LoaderComponent,
    multi: true,
  }],
})
export class LoaderComponent {
  public response: any;

  constructor(private http: HttpClient, public loaderService: LoaderService) {}

  run() {
    this.loaderService.showLoader = true;
    const url = "https://jsonplaceholder.typicode.com/users/1";
    this.http.get(url).subscribe((r) => {
      this.loaderService.showLoader = false;
      return (this.response = r);
    });
    // this.http.get(url).pipe(map (r => console.log("11112", r))).subscribe()

  }
}
// this.http.get(url).pipe(map (r => console.log("11112", r))), switchMap(r => ajax.getJSON(url + r)),
//   map(this.response => this.response.items),
// mergeMap(items => items),
//   this.http.get(url).subscribe(r => r.address);

// const url = "https://jsonplaceholder.typicode.com/users/1";
// if (typeof this.r === "string") {
//   this.http.get(url).subscribe(r => (this.response = JSON.parse(r)));
// }

// this.http.get(url).pipe.(map (r => (this.response = r)));

// this.http.get(url).subscribe(pipe (map ((r:any) => (this.response = r))));
