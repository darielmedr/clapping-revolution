import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
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
    private domSanitizer: DomSanitizer
    ) {
      this.matIconRegistry.addSvgIcon(
        "arrowDown",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/arrow-down.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "facebook",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/facebook.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "instagram",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/instagram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "telegram",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/telegram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "twitter",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/twitter.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "youtube",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/youtube.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "heart",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/heart.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "facebookLives",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/instagram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "docPdf",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/telegram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "comicBook",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/twitter.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "close",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/twitter.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "paper",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/telegram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "eye",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/twitter.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "ear",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/youtube.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "facebookDark",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/facebook.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "twitterDark",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/twitter.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "telegramDark",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/telegram.svg")
      );
      this.matIconRegistry.addSvgIcon(
        "whatsappDark",
        this.domSanitizer.bypassSecurityTrustResourceUrl("/assets/images/icons/instagram.svg")
      );
    }

  ngOnInit(): void {
    this.detectWindowResize();
    this.detectWindowScroll();
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

  private detectWindowScroll(): void {
    fromEvent(window, 'scroll')
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => {
        const scrolledTopOffset = this.getTopPosition();
        this.windowService.updateScrollTop(scrolledTopOffset);
      });
  }

  private getTopPosition(): number {
    return window.scrollY;
  }
}
