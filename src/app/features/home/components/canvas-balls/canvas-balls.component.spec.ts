import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasBallsComponent } from './canvas-balls.component';

describe('CanvasBallsComponent', () => {
  let component: CanvasBallsComponent;
  let fixture: ComponentFixture<CanvasBallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanvasBallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
