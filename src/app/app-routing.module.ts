import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/component/home.component";
import {AngularComponent} from "./modules/angular/component/angular.component";
import {ReactComponent} from "./modules/react/component/react.component";
import {VueComponent} from "./modules/vue/component/vue.component";
import {HomeGuard} from "./modules/home/home.guard";
import {PostsComponent} from "./modules/posts/component/posts.component";


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'angular',
    component: AngularComponent,
    // canActivate: [HomeGuard]

  },
  {
    path: 'react',
    component: ReactComponent,
    // canActivate: [HomeGuard]
  },
  {
    path: 'vue',
    component: VueComponent,
    // canActivate: [HomeGuard]
  },
  {
    path: 'posts',
    component: PostsComponent,
    // canActivate: [HomeGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [HomeGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
