import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee12Component } from './interviewee12.component';

describe('Interviewee12Component', () => {
  let component: Interviewee12Component;
  let fixture: ComponentFixture<Interviewee12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
