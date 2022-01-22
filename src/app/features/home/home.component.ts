import { filter, takeUntil, tap } from 'rxjs/operators';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { SeoService } from 'src/app/core/services/seo.service';
import { MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject();

  private isAutoScrollEnabled: boolean = true;

  @ViewChild('interviewedRef') interviewedRef!: ElementRef<HTMLElement>;

  constructor(private seoService: SeoService) {}

  ngOnInit(): void {
    const title: string = 'La Revolución de los aplausos - Periodismo de Barrio';
    const description: string = 'La Revolución de los aplausos, una serie de conversaciones con actores de la sociedad civil cubana, a raíz del diálogo que tuvo lugar el 27 de noviembre de 2020 en el Ministerio de Cultura.';
    const baseUrl: string = 'https://revoluciondelosaplausos.periodismodebarrio.org';

    const metaTags: MetaDefinition[] = [
      { name: 'description', content: description },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: baseUrl },
      { property: 'twitter:title', content: title },
      { property: 'twitter:description', content: description }
    ];

    this.seoService.updateMetaTags(metaTags);
    this.seoService.setTitle(title);
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngAfterViewInit(): void {
    fromEvent(window, 'scroll')
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(() => this.isAutoScrollEnabled || window.scrollY === 0),
        tap(() => this.setConfigScrolledTop()),
        filter(() => window.scrollY > 0)
      )
      .subscribe(() => {
        this.isAutoScrollEnabled = false;
        this.scrollTo(this.interviewedRef.nativeElement);
      });
  }

  private setConfigScrolledTop(): void {
    this.isAutoScrollEnabled = true;
  }

  public scrollTo(element: HTMLElement): void {
    window.scrollTo({
      top: element.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }
}
