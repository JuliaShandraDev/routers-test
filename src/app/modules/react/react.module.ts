import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactProjectChildComponent } from './children/react-project-child/react-project-child.component';
import { ReactProjectParentComponent } from './children/react-project-parent/react-project-parent.component';
import {ReactRoutingModule} from "./react-routing.module";



@NgModule({
  declarations: [
    ReactProjectChildComponent,
    ReactProjectParentComponent
  ],
  exports: [
    ReactProjectParentComponent
  ],
  imports: [
    CommonModule,
    ReactRoutingModule
  ]
})
export class ReactModule { }
