import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Interviewee11Component } from './interviewee11.component';

describe('Interviewee11Component', () => {
  let component: Interviewee11Component;
  let fixture: ComponentFixture<Interviewee11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Interviewee11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Interviewee11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
