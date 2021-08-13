import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee7Component } from './interviewee7.component';

describe('Interviewee7Component', () => {
  let component: Interviewee7Component;
  let fixture: ComponentFixture<Interviewee7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
