import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InterviewedService } from 'src/app/core/services/interviewed.service';
import Interviewed from 'src/app/shared/models/interviewed';

@Component({
  selector: 'app-card-slider',
  templateUrl: './card-slider.component.html',
  styleUrls: ['./card-slider.component.scss']
})
export class CardSliderComponent implements OnInit, OnDestroy, AfterViewInit {

  public interviewees: Array<Interviewed> = [];

  @ViewChild('slidesRef') slidesRef!: ElementRef;
  @ViewChild('slideRef') slideRef!: ElementRef;

  public numberOfShownSlides: number = 3;
  public currentIndex: number = this.numberOfShownSlides;

  private unsuscribe$: Subject<void> = new Subject();

  constructor(private interviewedService: InterviewedService) { }

  ngOnInit(): void {
    this.interviewedService.getInterviewees().pipe(takeUntil(this.unsuscribe$)).subscribe(
      (interviewees: Interviewed[]) => this.interviewees = interviewees
    );
  }

  ngOnDestroy(): void {
    this.unsuscribe$.next();
  }

  ngAfterViewInit(): void {
    window.addEventListener('resize', this.handleWindowResize);
    this.slidesRef.nativeElement.addEventListener('transitionend', this.handleTransitionEnd);
    this.setCurrentSlidePosition();
  }

  public setSlideAtIndex(slideIndex: number): void {
    this.setCurrentIndex(slideIndex);
    this.setCurrentSlidePosition();
  }

  public setNextSlide(): void {
    this.setNextIndex();
    this.setSliderTransition();
    this.setCurrentSlidePosition();
  }

  public setPreviousSlide(): void {
    this.setPreviousIndex();
    this.setSliderTransition();
    this.setCurrentSlidePosition();
  }

  private setCurrentIndex(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }

  private setSliderTransition(): void {
    this.slidesRef.nativeElement.style.transition = 'transform 0.5s ease-in-out';
  }

  private removeSliderTransition(): void {
    this.slidesRef.nativeElement.style.transition = 'none';
  }

  private setCurrentSlidePosition(): void {
    const slideWidth = this.slideRef.nativeElement.clientWidth;
    this.slidesRef.nativeElement.style.transform = `translateX(${-slideWidth * this.currentIndex}px)`;
  }

  private setNextIndex(): void {
    if (this.currentIndex >= this.interviewees.length + this.numberOfShownSlides) return;
    this.currentIndex++;
  }

  private setPreviousIndex(): void {
    if (this.currentIndex <= 0) return;
    this.currentIndex--;
  }

  private handleTransitionEnd = () => {
    if (this.currentIndex === this.interviewees.length + this.numberOfShownSlides) {
      this.removeSliderTransition();
      this.currentIndex = this.numberOfShownSlides;
      this.setCurrentSlidePosition();
      return;
    }

    if (this.currentIndex === 0) {
      this.removeSliderTransition();
      this.currentIndex = this.interviewees.length;
      this.setCurrentSlidePosition();
      return;
    }
  }

  private handleWindowResize = () => {
    if (window.innerWidth < 520) {
      this.numberOfShownSlides = 1;
    } else if (window.innerWidth < 700) {
      this.numberOfShownSlides = 2;
    } else {
      this.numberOfShownSlides = 3;
    }
    this.removeSliderTransition();
    this.setCurrentSlidePosition();
  }
}
