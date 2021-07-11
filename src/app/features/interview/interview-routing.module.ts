import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewedDetailComponent } from './components/interviewed-detail/interviewed-detail.component';
import { InterviewComponent } from './interview.component';

const routes: Routes = [
  {
    path: '', component: InterviewComponent,
    children: [
      { path: '', redirectTo: '1', pathMatch: 'full' },
      {
        path: ':id', component: InterviewedDetailComponent,
        children: [
          
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewRoutingModule { }
