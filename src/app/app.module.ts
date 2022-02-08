import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {environment} from 'src/environments/environment';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {ExampleOneComponent} from './example-one/example-one.component';
import {ExampleTwoComponent} from './example-two/example-two.component';
import {StoreModule} from "@ngrx/store";
import {ExampleEffects} from "./store/example.effects";
import * as fromReducer from "./store/example.reducer"


@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forRoot([ExampleEffects]),
    StoreModule.forRoot({example: fromReducer.reducer}),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),
    StoreRouterConnectingModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
