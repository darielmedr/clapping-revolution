import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewedCardComponent } from './interviewed-card.component';

describe('InterviewedCardComponent', () => {
  let component: InterviewedCardComponent;
  let fixture: ComponentFixture<InterviewedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
