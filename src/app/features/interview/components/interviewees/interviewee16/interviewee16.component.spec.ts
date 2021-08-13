import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee16Component } from './interviewee16.component';

describe('Interviewee16Component', () => {
  let component: Interviewee16Component;
  let fixture: ComponentFixture<Interviewee16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee16Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
