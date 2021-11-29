import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  public links: { icon: string, url: string }[] = [
    { icon: 'twitter', url: 'https://twitter.com/periodibarrio' },
    { icon: 'facebook', url: 'https://www.facebook.com/periodismodebarrio' },
    { icon: 'instagram', url: 'https://www.instagram.com/periodismodebarrio/' },
    { icon: 'telegram', url: 'https://t.me/periodismodebarrio' },
    { icon: 'youtube', url: 'https://www.youtube.com/c/PeriodismodeBarrio' },
    { icon: 'cloud', url: 'https://soundcloud.com/periodismo-de-barrio' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
