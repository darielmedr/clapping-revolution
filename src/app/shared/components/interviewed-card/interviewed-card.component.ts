import { Component, Input, OnInit } from '@angular/core';
import Interviewed from '../../models/interviewed';

@Component({
  selector: 'app-interviewed-card',
  templateUrl: './interviewed-card.component.html',
  styleUrls: ['./interviewed-card.component.scss']
})
export class InterviewedCardComponent implements OnInit {

  @Input()
  public interviewed: Interviewed | null = {
    id: 0,
    name: '',
    picture: '',
    quotes: ''
  };

  @Input()
  public hideQuote: boolean = true;

  @Input()
  public showShadow: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
