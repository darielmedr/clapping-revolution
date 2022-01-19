import { Interviewee1Component } from './components/interviewees/interviewee1/interviewee1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewComponent } from './interview.component';
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

const routes: Routes = [
  {
    path: '',
    component: InterviewComponent,
    children: [
      { path: 'tania-bruguera', component: Interviewee1Component },
      { path: 'fernando-perez', component: Interviewee2Component },
      { path: 'juan-pin-vilar', component: Interviewee3Component },
      { path: 'lynn-cruz-miguel-coyula', component: Interviewee4Component },
      { path: 'roberto-carcasses', component: Interviewee5Component },
      { path: 'ian-benavides', component: Interviewee6Component },
      { path: 'yunior-garcia-aguilera', component: Interviewee7Component },
      { path: 'camila-acosta', component: Interviewee8Component },
      { path: 'anamely-ramos', component: Interviewee9Component },
      { path: 'daniel-diaz-matilla', component: Interviewee10Component },
      { path: 'julio-antonio-fernandez-estrada', component: Interviewee11Component },
      { path: 'adonis-milan', component: Interviewee12Component },
      { path: 'maykel-obsorbo', component: Interviewee13Component },
      { path: 'luz-escobar', component: Interviewee14Component },
      { path: 'julio-llopiz-casal', component: Interviewee15Component },
      { path: 'katherine-bisquet', component: Interviewee16Component },
      { path: 'camila-lobon', component: Interviewee17Component },
      { path: 'omara-ruiz-urquiola', component: Interviewee18Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterviewRoutingModule {}
