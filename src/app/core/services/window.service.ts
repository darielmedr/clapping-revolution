import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  private screenWidth$: BehaviorSubject<number>;

  constructor(
    @Inject(DOCUMENT) public document: Document,
  ) {
    this.screenWidth$ = new BehaviorSubject(document.body.clientWidth)
  }

  public updateScreenWidth(width: number): void {
    this.screenWidth$.next(width);
  }

  public getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }
}
