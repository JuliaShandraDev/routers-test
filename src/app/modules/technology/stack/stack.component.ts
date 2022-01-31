import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IStack} from "../../../interfaces/stack.interface";

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent {
  public data: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.data = this.route.snapshot.data;
  }
  public techListReact: IStack[] = [
    {
      name: "Java Script"
    },
    {
      name: "Redux"
    },
    {
      name: "Express JS"
    },
    {
      name: "Mongo DB"
    }
  ];
}
