import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee3Component } from './interviewee3.component';

describe('Interviewee3Component', () => {
  let component: Interviewee3Component;
  let fixture: ComponentFixture<Interviewee3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
