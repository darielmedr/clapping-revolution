import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee15Component } from './interviewee15.component';

describe('Interviewee15Component', () => {
  let component: Interviewee15Component;
  let fixture: ComponentFixture<Interviewee15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
