import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Interviewee from 'src/app/shared/models/interviewee.model';
import { IntervieweeService } from 'src/app/core/services/interviewee.service';

@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.scss'],
})
export class InterviewComponent implements OnInit {

  public interviewees$: Observable<Array<Interviewee>> = new Observable();

  public isMenuOpened: boolean = false;

  constructor(private intervieweeService: IntervieweeService,) {}

  ngOnInit(): void {
    this.interviewees$ = this.intervieweeService.getInterviewees();
  }

  public openMenu(): void {
    this.isMenuOpened = true;
  }

  public closeMenu(): void {
    this.isMenuOpened = false;
  }
}
