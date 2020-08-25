import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import {ActivateGuard} from './activate.guard';
import {UserService} from './user.service'
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ActivateGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
