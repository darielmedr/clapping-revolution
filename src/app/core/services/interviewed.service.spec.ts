import { TestBed } from '@angular/core/testing';

import { InterviewedService } from './interviewed.service';

describe('InterviewedService', () => {
  let service: InterviewedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
