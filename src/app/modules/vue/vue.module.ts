import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VueProjectChildComponent } from './children/vue-project-child/vue-project-child.component';
import { VueProjectParentComponent } from './children/vue-project-parent/vue-project-parent.component';
import {VueRoutingModule} from "./vue-routing.module";



@NgModule({
  declarations: [
    VueProjectChildComponent,
    VueProjectParentComponent
  ],
  exports: [
    VueProjectParentComponent
  ],
  imports: [
    CommonModule,
    VueRoutingModule
  ]
})
export class VueModule { }
