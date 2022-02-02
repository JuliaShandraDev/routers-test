// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import {EMPTY, Observable} from 'rxjs';
// import { map, mergeMap, catchError } from 'rxjs/operators';
// import {UserViewComponent} from "../../modules/user-view/component/user-view.component";
// import {UpdateUser, UserActionsEnum} from "./user.action";
//
// @Injectable()
// export class UserEffects {
//   constructor(
//     private actions$: Actions,
//     private UserViewComponent : UserViewComponent
//   ) {}
//   loadUser$ = createEffect((): Observable<any> => {
//     return this.actions$.pipe(
//       ofType(UserActionsEnum.UpdateUser),
//       mergeMap(() => this.UserViewComponent.updateUser()
//         .pipe(map(user => ({UpdateUser})),
//           catchError(() => EMPTY)
//         ))
//     );
//   );
// }
