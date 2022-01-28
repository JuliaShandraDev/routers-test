import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {ReactProjectParentComponent} from "./children/react-project-parent/react-project-parent.component";
import {ReactProjectChildComponent} from "./children/react-project-child/react-project-child.component";
import {NotFoundComponent} from "../angular/children/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'react-project-parent',
        component: ReactProjectParentComponent
      },
      {
        path: 'react-project-child',
        component: ReactProjectChildComponent
      },
      {
        path: 'react-project-child/:id',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactRoutingModule { }
