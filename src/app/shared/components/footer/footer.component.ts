import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  public links: { icon: string, url: string }[] = [
    { icon: 'twitter', url: '' },
    { icon: 'facebook', url: '' },
    { icon: 'instagram', url: '' },
    { icon: 'telegram', url: '' },
    { icon: 'youtube', url: '' },
    { icon: 'heart', url: '' },
  ];

  @Input()
  public isDetailView: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
