import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { InterviewButtonsService } from 'src/app/features/interview/services/interview-buttons.service';
import { InterviewContentType } from 'src/app/shared/models/interview-content-type.model';

@Component({
  selector: 'app-interview-template',
  templateUrl: './interview-template.component.html',
  styleUrls: ['./interview-template.component.scss'],
})
export class InterviewTemplateComponent implements OnInit, OnDestroy {

  @Input()
  public audioId: string = '';

  @Input()
  public videoId: string = '';

  public activeTab: number = 0;
  private subscription: Subscription = new Subscription();

  constructor(private interviewButtonsService: InterviewButtonsService) {}

  ngOnInit(): void {
    this.subscription = this.interviewButtonsService
      .getActiveContentType()
      .subscribe((value: InterviewContentType) => {
        this.activeTab = value as number;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
