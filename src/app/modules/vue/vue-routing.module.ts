import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {VueProjectChildComponent} from "./children/vue-project-child/vue-project-child.component";
import {VueProjectParentComponent} from "./children/vue-project-parent/vue-project-parent.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'vue-project-parent',
        component: VueProjectParentComponent
      },
      {
        path: 'vue-project-child',
        component: VueProjectChildComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VueRoutingModule { }
