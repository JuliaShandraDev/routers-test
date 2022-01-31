import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularComponent } from './modules/angular/component/angular.component';
import { ReactComponent } from './modules/react/component/react.component';
import { VueComponent } from './modules/vue/component/vue.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularModule} from "./modules/angular/angular.module";
import {ReactModule} from "./modules/react/react.module";
import {VueModule} from "./modules/vue/vue.module";
import {HomeModule} from "./modules/home/home.module";
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { StackComponent } from './modules/technology/stack/stack.component';
import {ResolverResolver} from "./resolve/resolver.resolver";


@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    ReactComponent,
    VueComponent,
    NotFoundComponent,
    StackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularModule,
    ReactModule,
    VueModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [ResolverResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
