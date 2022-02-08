import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, EMPTY, map, mergeMap} from "rxjs";
import {MyService} from "../service";
import {ExampleActions} from "./example.actions";

@Injectable()
export class ExampleEffects {

  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType(ExampleActions.getData),
    mergeMap(() => this.myService.getSomeStuff()
      .pipe(
        map((data) => {
            return ExampleActions.getDataSuccess({data: data})
          },
          catchError(() => EMPTY)
        ))
    )
  ))

  constructor(
    private actions$: Actions,
    private myService: MyService
  ) {
  }
}
