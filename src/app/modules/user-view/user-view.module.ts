import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { userReducers } from "src/app/store/reducers/user.reducer";
import {UserViewComponent} from "./component/user-view.component";
import {environment} from "../../../environments/environment";


@NgModule({
  declarations: [UserViewComponent],
  exports: [
    UserViewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    // StoreModule.forRoot(reducer),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
  ]
})
export class UserViewModule { }
