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
      id: 1,
      name: "Java Script"
    },
    {
      id: 2,
      name: "Redux"
    },
    {
      id: 3,
      name: "Express JS"
    },
    {
      id: 4,
      name: "Mongo DB"
    }
  ];
}
