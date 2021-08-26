import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee18Component } from './interviewee18.component';

describe('Interviewee18Component', () => {
  let component: Interviewee18Component;
  let fixture: ComponentFixture<Interviewee18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee18Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
