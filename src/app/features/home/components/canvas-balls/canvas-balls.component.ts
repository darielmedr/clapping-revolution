import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Canvas from '../../models/Canvas';

@Component({
  selector: 'app-canvas-balls',
  templateUrl: './canvas-balls.component.html',
  styleUrls: ['./canvas-balls.component.scss'],
})
export class CanvasBallsComponent implements OnInit, AfterViewInit, OnDestroy {
  private unsuscribe$: Subject<void> = new Subject<void>();
  private onResize$: Observable<Event> = new Observable();

  @ViewChild('canvasRef')
  public canvasRef: ElementRef = new ElementRef(HTMLDivElement);

  private canvas!: Canvas;

  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsuscribe$.next();
    this.unsuscribe$.complete();
  }

  ngAfterViewInit(): void {
    this.detectWindowsSizeChanges();
    this.canvas = new Canvas(this.canvasRef.nativeElement);
    this.canvas.init();
    this.canvas.run();
  }

  private detectWindowsSizeChanges(): void {
    this.onResize$ = fromEvent(window, 'resize');

    this.onResize$.pipe(takeUntil(this.unsuscribe$)).subscribe((evt: Event) => {
      this.updateCanvasSize(
        this.canvasRef.nativeElement.clientWidth,
        this.canvasRef.nativeElement.clientHeight
      );
      this.canvas.adjustParticleSystemToCanvasSize();
    });
  }

  private updateCanvasSize(width: number, height: number): void {
    this.canvas.updateSize(width, height);
  }
}
