import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InterviewedService } from 'src/app/core/services/interviewed.service';
import Interviewed from '../../../../shared/models/interviewed';

@Component({
  selector: 'app-interviewed-grid',
  templateUrl: './interviewed-grid.component.html',
  styleUrls: ['./interviewed-grid.component.scss'],
  providers: [InterviewedService]
})
export class InterviewedGridComponent implements OnInit {

  public interviewees$: Observable<Array<Interviewed>> = new Observable();

  constructor(private interviewedService: InterviewedService) { }

  ngOnInit(): void {
    this.interviewees$ = this.interviewedService.getInterviewees();
  }
}
