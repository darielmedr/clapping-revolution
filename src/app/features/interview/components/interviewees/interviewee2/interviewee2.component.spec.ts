import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee2Component } from './interviewee2.component';

describe('Interviewee2Component', () => {
  let component: Interviewee2Component;
  let fixture: ComponentFixture<Interviewee2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
