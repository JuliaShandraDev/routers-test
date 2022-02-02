import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {UserViewComponent} from "./component/user-view.component";


@NgModule({
  declarations: [UserViewComponent],
  exports: [
    UserViewComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
  ]
})
export class UserViewModule { }
