import { Component, Input, OnInit } from '@angular/core';
import Interviewee from '../../models/interviewee.model';

@Component({
  selector: 'app-interviewed-card',
  templateUrl: './interviewed-card.component.html',
  styleUrls: ['./interviewed-card.component.scss']
})
export class InterviewedCardComponent implements OnInit {

  @Input()
  public interviewed: Interviewee | null = {
    id: 0,
    name: '',
    picture: '',
    quotes: ''
  };

  @Input()
  public hideQuote: boolean = true;

  @Input()
  public showShadow: boolean = true;

  @Input()
  public isCardDetail: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
