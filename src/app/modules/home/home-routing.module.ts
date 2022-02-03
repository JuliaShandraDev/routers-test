import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "../../shared/not-found/not-found.component";
import {UserResolver} from "../../resolve/user/user.resolver";
import {SinglePostComponent} from "../posts/children/single-post/single-post.component";

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
    loadChildren: () => import('../../modules/vue/vue.module').then(m => m.VueModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('../posts/posts.module').then(m => m.PostsModule),
  },
  {
    path: 'posts/details/:id',
    component: SinglePostComponent,
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [UserResolver],
})
export class HomeRoutingModule { }
