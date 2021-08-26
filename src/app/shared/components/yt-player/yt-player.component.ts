import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls: ['./yt-player.component.scss'],
})
export class YtPlayerComponent implements OnInit {
  @Input()
  public videoId: string = '';

  private ytUrlBase: string = 'https://www.youtube-nocookie.com/embed/';
  public videoSrcSaveUrl: SafeResourceUrl = '';

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const videoSrc = this.ytUrlBase + this.videoId;
    this.videoSrcSaveUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(videoSrc);
  }
}
