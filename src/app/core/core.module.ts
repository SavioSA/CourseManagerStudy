import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './component/navbar/navbar.component';
import { Error404Component } from './error404/error404.component';

@NgModule({

  declarations: [
    NavbarComponent
  ],
  exports:[
    NavbarComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
    ])
  ]

})

export class CoreModule {



}
