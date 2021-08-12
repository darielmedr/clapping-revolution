import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { InterviewedCardComponent } from './components/interviewed-card/interviewed-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreModule } from '../core/core.module';
import { ShowInViewDirective } from './directives/show-in-view.directive';
import { YtPlayerComponent } from './components/yt-player/yt-player.component';

const commonElementes: any[] = [
  YtPlayerComponent,
  InterviewedCardComponent,
  FooterComponent,
  ShowInViewDirective,
];

@NgModule({
  declarations: [
    ...commonElementes
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule
  ],
  exports: [
    ...commonElementes
  ],
})
export class SharedModule {}
