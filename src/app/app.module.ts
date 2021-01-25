import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { CourseModule } from './courses/course.module';
import { Error404Component } from './courses/error404/error404.component';
import { NavbarComponent } from './courses/navbar/navbar.component';
import { ChangePipe } from './courses/change.pipe';


@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavbarComponent,
    ChangePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      }, {
        path: '**', component: Error404Component
      }
    ]),
    CourseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
