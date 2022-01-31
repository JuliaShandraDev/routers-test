import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularProjectChildComponent } from './children/angular-project-child/angular-project-child.component';
import { AngularProjectParentComponent } from './children/angular-project-parent/angular-project-parent.component';
import {AngularRoutingModule} from "./angular-routing.module";
import { NotFoundComponent } from './children/not-found/not-found.component';
import {LoaderComponent} from "../../shared/loader/loader.component";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [
    AngularProjectChildComponent,
    AngularProjectParentComponent,
    NotFoundComponent,
    LoaderComponent
  ],
  exports: [
    AngularProjectChildComponent,
    AngularProjectParentComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    MatButtonModule
  ],
})
export class AngularModule { }
