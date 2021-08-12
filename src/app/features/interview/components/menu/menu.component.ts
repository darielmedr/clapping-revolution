import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IntervieweeService } from 'src/app/core/services/interviewee.service';
import Interviewee from 'src/app/shared/models/interviewee.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  public interviewees: Interviewee[] | null = [];

  @Output('closeMenu')
  private closeEvent: EventEmitter<void> = new EventEmitter();

  constructor(private intervieweeService: IntervieweeService) { }

  ngOnInit(): void {
  }

  public closeMenu(): void {
    this.closeEvent.emit();
  }

  public setIntervieweeByIdAndCloseMenu(id: number): void {
    this.intervieweeService.setIntervieweeById(id);
    this.closeMenu();
  }
}
