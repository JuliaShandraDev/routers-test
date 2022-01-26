import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'view-frameworks',
    pathMatch: 'full'
  },
  {
    path: 'frameworks',
    loadChildren: () => import('./modules/frameworks/frameworks.module').then(m => m.FrameworksModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
