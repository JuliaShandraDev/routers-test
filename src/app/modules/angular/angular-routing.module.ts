import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AngularProjectParentComponent} from "./children/angular-project-parent/angular-project-parent.component";
import {AngularProjectChildComponent} from "./children/angular-project-child/angular-project-child.component";

const routes: Routes = [
      {
        path: 'angular-project-parent',
        component: AngularProjectParentComponent
      },
      {
        path: 'angular-project-child',
        component: AngularProjectChildComponent
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule { }
