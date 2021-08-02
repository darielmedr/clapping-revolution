import { Component, OnInit } from '@angular/core';
import { InterviewedService } from '../../core/services/interviewed.service';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import Interviewed from 'src/app/shared/models/interviewed';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss'],
  providers: [InterviewedService],
})
export class InterviewComponent implements OnInit {

  public interviewees$: Observable<Array<Interviewed>> = new Observable();
  public isHandset$: Observable<boolean> = new Observable();

  public isMenuOpened: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private interviewedService: InterviewedService
  ) { }

  ngOnInit(): void {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map((result: BreakpointState) => result.matches),
        shareReplay()
      );

    this.interviewees$ = this.interviewedService.getInterviewees();
  }

  public openMenu(): void {
    this.isMenuOpened = true;
  }

  public closeMenu(): void {
    this.isMenuOpened = false;
  }
}
