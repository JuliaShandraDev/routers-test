import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ReactProjectParentComponent} from "./children/react-project-parent/react-project-parent.component";
import {ReactProjectChildComponent} from "./children/react-project-child/react-project-child.component";

const routes: Routes = [
      {
        path: 'react-project-parent',
        component: ReactProjectParentComponent
      },
      {
        path: 'react-project-child',
        component: ReactProjectChildComponent
      },
  // {
  //   path: 'angular-project-child/:id',
  //   component: NotFoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactRoutingModule { }
