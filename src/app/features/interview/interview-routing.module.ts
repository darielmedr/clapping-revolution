import { Interviewee1Component } from './components/interviewees/interviewee1/interviewee1.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewComponent } from './interview.component';
import { Interviewee2Component } from './components/interviewees/interviewee2/interviewee2.component';

const routes: Routes = [
  {
    path: '',
    component: InterviewComponent,
    children: [
      { path: '1', component: Interviewee1Component },
      { path: '2', component: Interviewee2Component },
      { path: '3', component: Interviewee1Component },
      { path: '4', component: Interviewee1Component },
      { path: '5', component: Interviewee1Component },
      { path: '6', component: Interviewee1Component },
      { path: '7', component: Interviewee1Component },
      { path: '8', component: Interviewee1Component },
      { path: '9', component: Interviewee1Component },
      { path: '10', component: Interviewee1Component },
      { path: '11', component: Interviewee1Component },
      { path: '12', component: Interviewee1Component },
      { path: '13', component: Interviewee1Component },
      { path: '14', component: Interviewee1Component },
      { path: '15', component: Interviewee1Component },
      { path: '16', component: Interviewee1Component },
      { path: '17', component: Interviewee1Component },
      { path: '18', component: Interviewee1Component },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InterviewRoutingModule {}
