import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-angular-project-child',
  templateUrl: './angular-project-child.component.html',
  styleUrls: ['./angular-project-child.component.scss']
})
export class AngularProjectChildComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot);
  }

}
