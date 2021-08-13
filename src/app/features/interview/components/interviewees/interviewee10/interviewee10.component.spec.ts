import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee10Component } from './interviewee10.component';

describe('Interviewee10Component', () => {
  let component: Interviewee10Component;
  let fixture: ComponentFixture<Interviewee10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
