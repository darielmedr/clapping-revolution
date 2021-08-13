import { IntervieweeService } from 'src/app/core/services/interviewee.service';
import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-share-social-network',
  templateUrl: './share-social-network.component.html',
  styleUrls: ['./share-social-network.component.scss'],
})
export class ShareSocialNetworkComponent implements OnInit, OnDestroy {

  public links: { icon: string; shareUrl: string }[] = [
    {
      icon: 'facebookDark',
      shareUrl: 'https://www.facebook.com/sharer/sharer.php?u=',
    },
    { icon: 'twitterDark', shareUrl: 'https://twitter.com/intent/tweet?url=' },
    { icon: 'telegramDark', shareUrl: 'https://t.me/share/url?url=' },
    { icon: 'whatsappDark', shareUrl: 'https://api.whatsapp.com/send?text=' },
  ];

  private unsubscribe$: Subject<void> = new Subject();

  public encodedUrl: string;

  constructor(private intervreeService: IntervieweeService) {
    this.encodedUrl = this.getCurrentUrl();
  }

  ngOnInit(): void {
    this.setUrlOnRouteChange();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private setUrlOnRouteChange(): void {

    // getCurrentInterviewee() method of interviewee service emits a value when route change
    this.intervreeService
      .getCurrentInterviewee()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.encodedUrl = this.getCurrentUrl();
      });
  }

  private getCurrentUrl(): string {
    return encodeURI(window.location.href);
  }
}
