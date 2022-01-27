import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'angular',
    loadChildren: () => import('../../modules/angular/angular.module').then(m => m.AngularModule)
  },
  {
    path: 'react',
    loadChildren: () => import('../../modules/react/react.module').then(m => m.ReactModule)
  },
  {
    path: 'vue',
    loadChildren: () => import('../../modules/vue/vue.module').then(m => m.VueModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
