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
import { Interviewee1Component } from './components/interviewees/interviewee1/interviewee1.component';
import { Interviewee2Component } from './components/interviewees/interviewee2/interviewee2.component';
import { Interviewee3Component } from './components/interviewees/interviewee3/interviewee3.component';
import { Interviewee4Component } from './components/interviewees/interviewee4/interviewee4.component';
import { Interviewee5Component } from './components/interviewees/interviewee5/interviewee5.component';
import { Interviewee6Component } from './components/interviewees/interviewee6/interviewee6.component';
import { Interviewee7Component } from './components/interviewees/interviewee7/interviewee7.component';
import { Interviewee8Component } from './components/interviewees/interviewee8/interviewee8.component';
import { Interviewee9Component } from './components/interviewees/interviewee9/interviewee9.component';
import { Interviewee10Component } from './components/interviewees/interviewee10/interviewee10.component';
import { Interviewee11Component } from './components/interviewees/interviewee11/interviewee11.component';
import { Interviewee12Component } from './components/interviewees/interviewee12/interviewee12.component';
import { Interviewee13Component } from './components/interviewees/interviewee13/interviewee13.component';
import { Interviewee14Component } from './components/interviewees/interviewee14/interviewee14.component';
import { Interviewee15Component } from './components/interviewees/interviewee15/interviewee15.component';
import { Interviewee16Component } from './components/interviewees/interviewee16/interviewee16.component';
import { Interviewee17Component } from './components/interviewees/interviewee17/interviewee17.component';
import { Interviewee18Component } from './components/interviewees/interviewee18/interviewee18.component';
import { ShareSocialNetworkComponent } from './components/share-social-network/share-social-network.component';
import { InterviewButtonsComponent } from './components/interview-buttons/interview-buttons.component';
import { InterviewButtonsService } from './services/interview-buttons.service';

@NgModule({
  declarations: [
    InterviewComponent,
    InterviewedDetailComponent,
    CardSliderComponent,
    NavbarComponent,
    MenuComponent,
    Interviewee1Component,
    Interviewee2Component,
    Interviewee3Component,
    Interviewee4Component,
    Interviewee5Component,
    Interviewee6Component,
    Interviewee7Component,
    Interviewee8Component,
    Interviewee9Component,
    Interviewee10Component,
    Interviewee11Component,
    Interviewee12Component,
    Interviewee13Component,
    Interviewee14Component,
    Interviewee15Component,
    Interviewee16Component,
    Interviewee17Component,
    Interviewee18Component,
    ShareSocialNetworkComponent,
    InterviewButtonsComponent,
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
