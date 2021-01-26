import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangePipe } from '../../courses/change.pipe';


@NgModule({
  declarations: [
    ChangePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChangePipe
  ]
})
export class AppPipeModule {



}
