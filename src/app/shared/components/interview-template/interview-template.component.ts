import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-template',
  templateUrl: './interview-template.component.html',
  styleUrls: ['./interview-template.component.scss']
})
export class InterviewTemplateComponent implements OnInit {

  @Input()
  public audioId: string = '';

  @Input()
  public videoId: string = '';

  constructor() { }

  ngOnInit(): void {
  }
}
