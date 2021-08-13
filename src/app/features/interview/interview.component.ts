import { Component, OnDestroy, OnInit } from '@angular/core';
import { IntervieweeService } from '../../core/services/interviewee.service';
import { Observable, Subject } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import Interviewee from 'src/app/shared/models/interviewee.model';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject();

  public interviewees$: Observable<Array<Interviewee>> = new Observable();
  public isHandset$: Observable<boolean> = new Observable();

  public isMenuOpened: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private intervieweeService: IntervieweeService,
  ) { }

  ngOnInit(): void {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map((result: BreakpointState) => result.matches),
        shareReplay()
      );

    this.interviewees$ = this.intervieweeService.getInterviewees();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  public openMenu(): void {
    this.isMenuOpened = true;
  }

  public closeMenu(): void {
    this.isMenuOpened = false;
  }
}
