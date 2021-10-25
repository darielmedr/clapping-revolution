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
        "facebook",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/social/facebook.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "instagram",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/social/instagram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "telegram",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/social/telegram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "twitter",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/social/twitter.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "youtube",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/social/youtube.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "cloud",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/social/cloud.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "facebookDark",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/social/dark/facebook-dark.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "twitterDark",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/social/dark/twitter-dark.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "telegramDark",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/social/dark/telegram-dark.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "whatsappDark",
        this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/images/icons/social/dark/whatsapp-dark.svg")
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
