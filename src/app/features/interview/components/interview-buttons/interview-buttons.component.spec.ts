import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewButtonsComponent } from './interview-buttons.component';

describe('InterviewButtonsComponent', () => {
  let component: InterviewButtonsComponent;
  let fixture: ComponentFixture<InterviewButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
