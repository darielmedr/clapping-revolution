import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  public links: { icon: string }[] = [
    { icon: 'twitter' },
    { icon: 'facebook' },
    { icon: 'instagram' },
    { icon: 'telegram' },
    { icon: 'youtube' },
    { icon: 'heart' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
