import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./component/home.component";
import {ResolverResolver} from "../../resolve/resolver.resolver";

@NgModule({
  declarations: [HomeComponent],
  exports: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    HomeRoutingModule
  ],
  providers: [ResolverResolver],
})
export class HomeModule { }
