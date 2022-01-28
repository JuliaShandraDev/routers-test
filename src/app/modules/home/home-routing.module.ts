import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "../../shared/not-found/not-found.component";
import {ResolverResolver} from "../../resolve/resolver.resolver";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'angular',
    loadChildren: () => import('../../modules/angular/angular.module').then(m => m.AngularModule),
    resolve: { message: ResolverResolver },
  },
  {
    path: 'react',
    loadChildren: () => import('../../modules/react/react.module').then(m => m.ReactModule)
  },
  {
    path: 'vue',
    loadChildren: () => import('../../modules/vue/vue.module').then(m => m.VueModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ResolverResolver],
})
export class HomeRoutingModule { }
