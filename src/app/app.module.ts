import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { StoreModule } from '@ngrx/store';
import { userReducers } from "src/app/store/reducers/user.reducer";
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
import { WithResolverComponent } from './shared/with-resolver/with-resolver.component';
import {GithubService} from "./services/git/github.service";
import {UserViewModule} from "./modules/user-view/user-view.module";
import { reducers, metaReducers } from './reducers';



@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    ReactComponent,
    VueComponent,
    NotFoundComponent,
    StackComponent,
    WithResolverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularModule,
    ReactModule,
    VueModule,
    HomeModule,
    HttpClientModule,
    UserViewModule,
    BrowserModule,
    StoreModule.forRoot(userReducers),
    StoreModule.forRoot(reducers, {
      metaReducers
    })
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
