import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  @Output('openMenu')
  private openMenuEmitter: EventEmitter<void> = new EventEmitter();

  @Input()
  public showOpenBtn: boolean | null = false;

  constructor() {}

  ngOnInit(): void {}

  public openMenu(): void {
    this.openMenuEmitter.emit();
  }
}
