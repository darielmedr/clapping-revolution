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
      { path: '1', component: Interviewee1Component },
      { path: '2', component: Interviewee2Component },
      { path: '3', component: Interviewee3Component },
      { path: '4', component: Interviewee4Component },
      { path: '5', component: Interviewee5Component },
      { path: '6', component: Interviewee6Component },
      { path: '7', component: Interviewee7Component },
      { path: '8', component: Interviewee8Component },
      { path: '9', component: Interviewee9Component },
      { path: '10', component: Interviewee10Component },
      { path: '11', component: Interviewee11Component },
      { path: '12', component: Interviewee12Component },
      { path: '13', component: Interviewee13Component },
      { path: '14', component: Interviewee14Component },
      { path: '15', component: Interviewee15Component },
      { path: '16', component: Interviewee16Component },
      { path: '17', component: Interviewee17Component },
      { path: '18', component: Interviewee18Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterviewRoutingModule {}
