import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee8Component } from './interviewee8.component';

describe('Interviewee8Component', () => {
  let component: Interviewee8Component;
  let fixture: ComponentFixture<Interviewee8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
