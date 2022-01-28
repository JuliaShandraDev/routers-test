import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AngularProjectParentComponent} from "./children/angular-project-parent/angular-project-parent.component";
import {AngularProjectChildComponent} from "./children/angular-project-child/angular-project-child.component";
import {NotFoundComponent} from "./children/not-found/not-found.component";
import {ResolverResolver} from "../../resolve/resolver.resolver";

const routes: Routes = [
  {
    path: '',
    resolve: { message: ResolverResolver },
    children: [
      {
        path: 'angular-project-parent',
        component: AngularProjectParentComponent
      },
      {
        path: 'angular-project-child',
        component: AngularProjectChildComponent
      },
      {
        path: 'angular-project-child/:id',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ResolverResolver]
})
export class AngularRoutingModule { }
