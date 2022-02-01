import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {VueProjectChildComponent} from "./children/vue-project-child/vue-project-child.component";
import {VueProjectParentComponent} from "./children/vue-project-parent/vue-project-parent.component";
import {UserResolver} from "../../resolve/user/user.resolver";
import {WithResolverComponent} from "../../shared/with-resolver/with-resolver.component";

const routes: Routes = [
      {
        path: 'vue-project-parent',
        component: VueProjectParentComponent
      },
      {
        path: 'vue-project-child',
        component: VueProjectChildComponent
      },
  // {
  //   path: 'angular-project-child/:id',
  //   component: NotFoundComponent
  // }
      {
        path: 'resolver',
        component: WithResolverComponent,
        resolve: { users: UserResolver }
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserResolver],
})
export class VueRoutingModule { }
