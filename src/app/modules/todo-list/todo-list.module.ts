import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListComponent} from "./todo-list.component";
import {AppModule} from "../../app.module";


@NgModule({
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
  imports: [
    CommonModule,
    AppModule
  ]
})
export class TodoListModule { }
