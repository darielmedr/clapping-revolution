import { Component, OnInit } from '@angular/core';
import { IntervieweeService } from '../../core/services/interviewee.service';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import Interviewee from 'src/app/shared/models/interviewee.model';

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
    private intervieweeService: IntervieweeService
  ) { }

  ngOnInit(): void {
    this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map((result: BreakpointState) => result.matches),
        shareReplay()
      );

    this.interviewees$ = this.intervieweeService.getInterviewees();
  }

  public openMenu(): void {
    this.isMenuOpened = true;
  }

  public closeMenu(): void {
    this.isMenuOpened = false;
  }

  public setIntervieweeById(id: number): void {
    this.intervieweeService.setIntervieweeById(id);
  }
}
