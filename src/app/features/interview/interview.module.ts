import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewComponent } from './interview.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { InterviewedDetailComponent } from './components/interviewed-detail/interviewed-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardSliderComponent } from './components/card-slider/card-slider.component';

@NgModule({
  declarations: [
    InterviewComponent,
    InterviewedDetailComponent,
    CardSliderComponent,
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class InterviewModule { }
