import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewedGridComponent } from './interviewed-grid.component';

describe('InterviewedGridComponent', () => {
  let component: InterviewedGridComponent;
  let fixture: ComponentFixture<InterviewedGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewedGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewedGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
