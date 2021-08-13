import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee14Component } from './interviewee14.component';

describe('Interviewee14Component', () => {
  let component: Interviewee14Component;
  let fixture: ComponentFixture<Interviewee14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
