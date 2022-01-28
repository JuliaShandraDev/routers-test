import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {VueProjectChildComponent} from "./children/vue-project-child/vue-project-child.component";
import {VueProjectParentComponent} from "./children/vue-project-parent/vue-project-parent.component";
import {NotFoundComponent} from "../angular/children/not-found/not-found.component";

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
      },
      {
        path: 'vue-project-child/:id',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VueRoutingModule { }
