import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundcloudAudioPlayerComponent } from './soundcloud-audio-player.component';

describe('SoundcloudAudioPlayerComponent', () => {
  let component: SoundcloudAudioPlayerComponent;
  let fixture: ComponentFixture<SoundcloudAudioPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundcloudAudioPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundcloudAudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
