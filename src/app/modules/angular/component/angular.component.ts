import { Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent {

  constructor(private router: Router) { }

  public value = '';

  inputChange(event: any): void{
    this.value = event
  }

  goToPage(pageName: string): void{
    this.router.navigate([`${pageName}`])
  }
}
