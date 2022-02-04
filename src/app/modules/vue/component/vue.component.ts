import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {GithubService} from "../../../services/git/github.service";

@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.scss']
})
export class VueComponent {
  public users: any = [];
  constructor(private router: Router, private githubService: GithubService) { }

  goToPage(pageName: string){
    this.router.navigate([`${pageName}`])
  }
}
