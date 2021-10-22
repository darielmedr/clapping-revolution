import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { InterviewContentType } from 'src/app/shared/models/interview-content-type.model';

@Injectable({
  providedIn: 'root'
})
export class InterviewButtonsService {

  private activeContentType: Subject<InterviewContentType> = new Subject();

  constructor() { }

  public getActiveContentType(): Observable<InterviewContentType> {
    return this.activeContentType.asObservable();
  }

  public setActiveContentType(value: InterviewContentType): void {
    this.activeContentType.next(value);
  }
}
