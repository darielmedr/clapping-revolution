import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-up-button',
  templateUrl: './scroll-up-button.component.html',
  styleUrls: ['./scroll-up-button.component.scss']
})
export class ScrollUpButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scrollTop(): void {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
