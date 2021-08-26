import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IntervieweeService } from 'src/app/core/services/interviewee.service';
import Interviewee from 'src/app/shared/models/interviewee.model';

@Component({
  selector: 'app-interviewed-detail',
  templateUrl: './interviewed-detail.component.html',
  styleUrls: ['./interviewed-detail.component.scss'],
})
export class InterviewedDetailComponent implements OnInit, OnDestroy {

  public interviewed$: Observable<Interviewee> = new Observable();

  private unsubscribe$: Subject<void> = new Subject();

  constructor(private intervieweeService: IntervieweeService) {}

  ngOnInit(): void {
    this.setCurrentInterviewedById();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private setCurrentInterviewedById(): void {
    this.interviewed$ = this.intervieweeService.getCurrentInterviewee();
  }
}
