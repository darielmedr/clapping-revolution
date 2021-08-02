import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewComponent } from './interview.component';
import { MaterialModule } from 'src/app/shared/modules/material.module';
import { InterviewedDetailComponent } from './components/interviewed-detail/interviewed-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CardSliderComponent } from './components/card-slider/card-slider.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreModule } from 'src/app/core/core.module';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    InterviewComponent,
    InterviewedDetailComponent,
    CardSliderComponent,
    NavbarComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    MaterialModule,
    SharedModule,
    CoreModule
  ]
})
export class InterviewModule { }
