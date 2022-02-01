import { Component } from '@angular/core';
import {GithubService} from "./services/git/github.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [GithubService]
})
export class AppComponent {
  title = 'routers-test';
}
