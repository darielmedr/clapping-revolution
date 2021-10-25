import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { InterviewedCardComponent } from './components/interviewed-card/interviewed-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreModule } from '../core/core.module';
import { YtPlayerComponent } from './components/yt-player/yt-player.component';
import { InterviewTemplateComponent } from './components/interview-template/interview-template.component';
import { SoundcloudAudioPlayerComponent } from './components/soundcloud-audio-player/soundcloud-audio-player.component';
import { LogoComponent } from './components/logo/logo.component';
import { ScrollUpButtonComponent } from './components/scroll-up-button/scroll-up-button.component';

const commonElementes: any[] = [
  YtPlayerComponent,
  InterviewedCardComponent,
  FooterComponent,
  InterviewTemplateComponent,
  SoundcloudAudioPlayerComponent,
  LogoComponent,
  ScrollUpButtonComponent,
];

@NgModule({
  declarations: [
    ...commonElementes,
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
