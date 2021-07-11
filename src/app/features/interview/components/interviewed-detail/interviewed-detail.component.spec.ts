import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewedDetailComponent } from './interviewed-detail.component';

describe('InterviewedDetailComponent', () => {
  let component: InterviewedDetailComponent;
  let fixture: ComponentFixture<InterviewedDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewedDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewedDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
