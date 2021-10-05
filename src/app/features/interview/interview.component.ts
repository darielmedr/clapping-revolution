import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map, share, shareReplay } from 'rxjs/operators';
import Interviewee from 'src/app/shared/models/interviewee.model';
import { IntervieweeService } from 'src/app/core/services/interviewee.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss']
})
export class InterviewComponent implements OnInit {

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

    this.interviewees$ = this.intervieweeService
                                .getInterviewees()
                                .pipe(share());

  }

  public openMenu(): void {
    this.isMenuOpened = true;
  }

  public closeMenu(): void {
    this.isMenuOpened = false;
  }
}
