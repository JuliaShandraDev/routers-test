import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { StoreModule } from '@ngrx/store';
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
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {RouterModule} from "@angular/router";
import {userReducers, userStore} from "./reducers/user/user.reducer";
import {EffectsModule, USER_PROVIDED_EFFECTS} from "@ngrx/effects";
// import {UserEffects} from "./reducers/user/user.effect";



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
    StoreModule.forRoot(reducers,{
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    RouterModule.forRoot([

    ]),
    // StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
    // StoreModule.forFeature("user", reducers),
    // EffectsModule.forRoot([UserEffects])
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// , UserEffects,
//   {
//     provide: USER_PROVIDED_EFFECTS,
//     multi: true,
//     useValue: [UserEffects],
//   },
