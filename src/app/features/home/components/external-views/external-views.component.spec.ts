import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalViewsComponent } from './external-views.component';

describe('ExternalViewsComponent', () => {
  let component: ExternalViewsComponent;
  let fixture: ComponentFixture<ExternalViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExternalViewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
