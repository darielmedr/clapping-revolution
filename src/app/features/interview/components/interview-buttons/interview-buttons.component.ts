import { Component, OnInit } from '@angular/core';
import { InterviewContentType } from 'src/app/shared/models/interview-content-type.model';
import { InterviewButtonsService } from '../../services/interview-buttons.service';

@Component({
  selector: 'app-interview-buttons',
  templateUrl: './interview-buttons.component.html',
  styleUrls: ['./interview-buttons.component.scss'],
})
export class InterviewButtonsComponent implements OnInit {

  public activeContentType: InterviewContentType = InterviewContentType.TEXT;

  constructor(private interviewBtnService: InterviewButtonsService) {}

  ngOnInit(): void {}

  public isTextActive(): boolean {
    return this.activeContentType === InterviewContentType.TEXT;
  }
  public isVideoActive(): boolean {
    return this.activeContentType === InterviewContentType.VIDEO;
  }
  public isAudioActive(): boolean {
    return this.activeContentType === InterviewContentType.AUDIO;
  }

  public setTextActive(): void {
    this.activeContentType = InterviewContentType.TEXT;
    this.interviewBtnService.setActiveContentType(this.activeContentType);
  }
  public setVideoActive(): void {
    this.activeContentType = InterviewContentType.VIDEO;
    this.interviewBtnService.setActiveContentType(this.activeContentType);
  }
  public setAudioActive(): void {
    this.activeContentType = InterviewContentType.AUDIO;
    this.interviewBtnService.setActiveContentType(this.activeContentType);
  }
}
