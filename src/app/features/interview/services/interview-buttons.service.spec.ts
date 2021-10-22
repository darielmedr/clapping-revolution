import { TestBed } from '@angular/core/testing';

import { InterviewButtonsService } from './interview-buttons.service';

describe('InterviewButtonsService', () => {
  let service: InterviewButtonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewButtonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
