import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee6Component } from './interviewee6.component';

describe('Interviewee6Component', () => {
  let component: Interviewee6Component;
  let fixture: ComponentFixture<Interviewee6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
