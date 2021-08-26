import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee9Component } from './interviewee9.component';

describe('Interviewee9Component', () => {
  let component: Interviewee9Component;
  let fixture: ComponentFixture<Interviewee9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
