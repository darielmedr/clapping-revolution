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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  private unsubscribe$: Subject<void> = new Subject();

  private isAutoScrollEnabled: boolean = true;

  @ViewChild('interviewedRef') interviewedRef!: ElementRef<HTMLElement>;

  constructor() {}

  ngOnInit(): void {}

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
