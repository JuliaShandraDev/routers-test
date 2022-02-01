import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GithubService} from "../../../services/git/github.service";

@Component({
  selector: 'app-vue',
  templateUrl: './vue.component.html',
  styleUrls: ['./vue.component.scss']
})
export class VueComponent implements OnInit {

  constructor(private router: Router, private githubService: GithubService) { }
  users: any = [];
  ngOnInit(): void {

  }

  goToPage(pageName: string){
    this.router.navigate([`${pageName}`])
  }

  navigateHome(): void {
    this.router.navigateByUrl('/home');
  }


}
