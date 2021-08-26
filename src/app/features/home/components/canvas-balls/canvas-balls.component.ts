import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { skip, takeUntil } from 'rxjs/operators';
import { WindowService } from 'src/app/core/services/window.service';
import Canvas from '../../models/Canvas';

@Component({
  selector: 'app-canvas-balls',
  templateUrl: './canvas-balls.component.html',
  styleUrls: ['./canvas-balls.component.scss'],
})
export class CanvasBallsComponent implements OnInit, AfterViewInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @ViewChild('canvasRef')
  public canvasRef: ElementRef = new ElementRef(HTMLDivElement);

  private canvas!: Canvas;

  constructor(private windowService: WindowService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngAfterViewInit(): void {
    this.detectWindowsSizeChanges();
    this.canvas = new Canvas(this.canvasRef.nativeElement);
    this.canvas.init();
    this.canvas.run();
  }

  private detectWindowsSizeChanges(): void {
    this.windowService
      .getScreenWidth()
      .pipe(takeUntil(this.unsubscribe$), skip(1))
      .subscribe((width: number) => {
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
