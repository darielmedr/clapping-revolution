import { Observable, ReplaySubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { InterviewContentType } from 'src/app/shared/models/interview-content-type.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewButtonsService {

  private activeContentType: ReplaySubject<InterviewContentType> = new ReplaySubject(1);

  constructor() { }

  public getActiveContentType(): Observable<InterviewContentType> {
    return this.activeContentType.asObservable();
  }

  public setActiveContentType(value: InterviewContentType): void {
    this.activeContentType.next(value);
  }
}
