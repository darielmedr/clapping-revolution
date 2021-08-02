import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Interviewed from 'src/app/shared/models/interviewed';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input()
  public interviewees: Interviewed[] | null = [];

  @Output('closeMenu')
  private closeEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public closeMenu(): void {
    this.closeEvent.emit();
  }
}
