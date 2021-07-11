import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollProgressComponent } from './components/scroll-progress/scroll-progress.component';
import { ScrollProgressBarDirective } from './directives/scroll-progress-bar.directive';
import { LogoComponent } from './components/logo/logo.component';

const commonElementes: any[] = [
  ScrollProgressComponent,
  ScrollProgressBarDirective,
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
