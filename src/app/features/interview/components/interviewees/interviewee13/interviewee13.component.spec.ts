import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee13Component } from './interviewee13.component';

describe('Interviewee13Component', () => {
  let component: Interviewee13Component;
  let fixture: ComponentFixture<Interviewee13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee13Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
