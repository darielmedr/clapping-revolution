import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  private screenWidth$: BehaviorSubject<number> = new BehaviorSubject(document.body.clientWidth);

  constructor() { }

  public updateScreenWidth(width: number): void {
    this.screenWidth$.next(width);
  }

  public getScreenWidth(): Observable<number> {
    return this.screenWidth$.asObservable();
  }
}
