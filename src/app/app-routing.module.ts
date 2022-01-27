import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/home/component/home.component";
import {AngularComponent} from "./modules/angular/component/angular.component";
import {ReactComponent} from "./modules/react/component/react.component";
import {VueComponent} from "./modules/vue/component/vue.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'angular',
    component: AngularComponent

  },
  {
    path: 'react',
    component: ReactComponent
  },
  {
    path: 'vue',
    component: VueComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
