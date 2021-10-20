import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-soundcloud-audio-player',
  templateUrl: './soundcloud-audio-player.component.html',
  styleUrls: ['./soundcloud-audio-player.component.scss']
})
export class SoundcloudAudioPlayerComponent implements OnInit {

  @Input()
  public audioId: string = '';

  private baseUrl: string = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/';
  private options: string = '&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true';

  public srcSafeUrl: SafeResourceUrl = '';

  constructor(private domSanitizer: DomSanitizer) {}

  ngOnInit(): void {
    const src = this.baseUrl + this.audioId + this.options;
    this.srcSafeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(src);
  }
}