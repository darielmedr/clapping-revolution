import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { fromEvent, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { IntervieweeService } from './core/services/interviewee.service';
import { WindowService } from './core/services/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(
    private windowService: WindowService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private intervieweeService: IntervieweeService,
    private router: Router
    ) {
      this.matIconRegistry.addSvgIcon(
        "arrowDown",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/arrow-down.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "facebook",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/facebook.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "instagram",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/instagram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "telegram",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/telegram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "twitter",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/twitter.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "youtube",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/youtube.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "cloud",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/cloud.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "close",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/close.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "paper",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/texto-off.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "eye",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/video-off.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "ear",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/audio-off.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "paperOn",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/texto-on.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "eyeOn",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/video-on.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "earOn",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/on-audio.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "facebookDark",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/facebook-dark.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "twitterDark",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/twitter-dark.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "telegramDark",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/telegram-dark.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "whatsappDark",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/whatsapp-dark.svg")
      );
    }

  ngOnInit(): void {
    this.detectWindowResize();
    this.listenOnRouteChange();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private detectWindowResize(): void {
    fromEvent(window, 'resize')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        this.windowService.updateScreenWidth(document.body.clientWidth);
      });
  }

  private listenOnRouteChange(): void {
    this.router.events
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        const id: number | undefined = this.extractIdOfRoute(event.urlAfterRedirects);

        if (id) {
          this.setIntervieweeById(id);
        }
      });
  }
  private extractIdOfRoute(routePath: string): number | undefined {

    const pathSegments: string[] = routePath.split('/');

    const interviewPath: string = pathSegments[pathSegments.length - 2];

    if (interviewPath !== 'interview') {
      return undefined;
    }

    const idString: string = pathSegments[pathSegments.length - 1];
    const id: number = Number(idString);

    return id === NaN ? undefined : id;
  }
  public setIntervieweeById(id: number): void {
    this.intervieweeService.setIntervieweeById(id);
  }
}
