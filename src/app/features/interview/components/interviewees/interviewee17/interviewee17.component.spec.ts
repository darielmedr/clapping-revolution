import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee17Component } from './interviewee17.component';

describe('Interviewee17Component', () => {
  let component: Interviewee17Component;
  let fixture: ComponentFixture<Interviewee17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
