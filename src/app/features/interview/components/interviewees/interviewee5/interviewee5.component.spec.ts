import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee5Component } from './interviewee5.component';

describe('Interviewee5Component', () => {
  let component: Interviewee5Component;
  let fixture: ComponentFixture<Interviewee5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
