import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {ExampleSelectors} from "../store/exemple.selectors";
import {ExampleActions} from "../store/example.actions";


@Component({
  selector: 'app-example-two',
  templateUrl: './example-two.component.html',
  styleUrls: ['./example-two.component.scss']
})
export class ExampleTwoComponent implements OnInit {

  count: number;
  count$: Observable<number>
  message$: Observable<string>

  constructor(private store$: Store) {
   this.count$ = this.store$.select(ExampleSelectors.count);
   // @ts-ignore
    this.message$ = this.store$.select(ExampleSelectors.message)
  }

  getData(): void {
    this.store$.dispatch(ExampleActions.getData())
  }

  ngOnInit(): void {
  this.store$.select(ExampleSelectors.giveMealData).subscribe((data) => console.log(data))
  }

}
