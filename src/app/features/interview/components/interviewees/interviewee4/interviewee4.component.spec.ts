import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee4Component } from './interviewee4.component';

describe('Interviewee4Component', () => {
  let component: Interviewee4Component;
  let fixture: ComponentFixture<Interviewee4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
