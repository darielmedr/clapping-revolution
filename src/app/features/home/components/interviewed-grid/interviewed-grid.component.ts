import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IntervieweeService } from 'src/app/core/services/interviewee.service';
import Interviewee from 'src/app/shared/models/interviewee.model';

@Component({
  selector: 'app-interviewed-grid',
  templateUrl: './interviewed-grid.component.html',
  styleUrls: ['./interviewed-grid.component.scss']
})
export class InterviewedGridComponent implements OnInit {

  public interviewees$: Observable<Array<Interviewee>> = new Observable();

  constructor(private intervieweeService: IntervieweeService) { }

  ngOnInit(): void {
    this.interviewees$ = this.intervieweeService.getInterviewees();
  }
}
