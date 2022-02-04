  import { Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.scss']
})
export class ReactComponent {
  constructor(private router: Router) { }

  goToPage(pageName: string){
    this.router.navigate([`${pageName}`])
  }

}
