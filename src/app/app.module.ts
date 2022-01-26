import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './modules/frameworks/children/angular/component/angular.component';
import { ReactComponent } from './modules/frameworks/children/react/component/react.component';
import { VueComponent } from './modules/frameworks/children/vue/component/vue.component';
import { FrameworksComponent } from './modules/frameworks/component/frameworks.component';
import { ViewFrameworksComponent } from './modules/view-frameworks/view-frameworks.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    ReactComponent,
    VueComponent,
    FrameworksComponent,
    ViewFrameworksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
