import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee1Component } from './interviewee1.component';

describe('Interviewee1Component', () => {
  let component: Interviewee1Component;
  let fixture: ComponentFixture<Interviewee1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
