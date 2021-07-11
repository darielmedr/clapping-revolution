import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InterviewedService } from 'src/app/core/services/interviewed.service';
import Interviewed from '../../../../shared/models/interviewed';

@Component({
  selector: 'app-interviewed-detail',
  templateUrl: './interviewed-detail.component.html',
  styleUrls: ['./interviewed-detail.component.scss']
})
export class InterviewedDetailComponent implements OnInit, OnDestroy {

  public interviewed$: Observable<Interviewed> = new Observable();

  private unsuscribe$: Subject<void> = new Subject();

  constructor(
    private route: ActivatedRoute,
    private interviewedService: InterviewedService
  ) { }

  ngOnInit(): void {
    this.setCurrentInterviewedById();
  }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  private setCurrentInterviewedById(): void {
    this.route.paramMap.pipe(takeUntil(this.unsuscribe$)).subscribe(
      (params: ParamMap) => {
        const currentId = Number(params.get('id'));
        this.interviewed$ = this.interviewedService.getInterviewedById(currentId);
      }
    );
  }

}
