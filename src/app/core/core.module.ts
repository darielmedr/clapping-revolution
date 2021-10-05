import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';

const commonElementes: any[] = [
  LogoComponent,
];

@NgModule({
  declarations: [
    ...commonElementes,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...commonElementes,
  ]
})
export class CoreModule { }
