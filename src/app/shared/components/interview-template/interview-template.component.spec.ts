import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewTemplateComponent } from './interview-template.component';

describe('InterviewTemplateComponent', () => {
  let component: InterviewTemplateComponent;
  let fixture: ComponentFixture<InterviewTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
