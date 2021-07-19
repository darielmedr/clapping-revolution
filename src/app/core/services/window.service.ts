import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  private scrolledTop$: BehaviorSubject<number> = new BehaviorSubject(0);
  private screenWidth$: BehaviorSubject<number> = new BehaviorSubject(document.body.clientWidth);

  constructor() { }

  public updateScrollTop(scrolledTop: number): void {
    this.scrolledTop$.next(scrolledTop);
  }

  public updateScreenWidth(width: number): void {
    this.screenWidth$.next(width);
  }

  public getScrolledTop(): Observable<number> {
    return this.scrolledTop$.asObservable();
  }

  public getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }
}
