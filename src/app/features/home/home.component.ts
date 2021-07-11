import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public scrollTo(el: HTMLElement): void {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}
