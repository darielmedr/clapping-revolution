import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowScrollService {

  private scrolledTop$: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor() { }

  public update(scrolledTop: number): void {
    this.scrolledTop$.next(scrolledTop);
  }

  public getScrolledTop(): Observable<number> {
    return this.scrolledTop$.asObservable();
  }
}
