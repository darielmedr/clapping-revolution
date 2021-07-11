import { Component, HostListener } from '@angular/core';
import { WindowScrollService } from './shared/services/window-scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private windowScrollService: WindowScrollService) { }

  @HostListener('window:scroll') onScroll(): void {
    const scrolledTopOffset = this.getTopPosition();
    this.windowScrollService.update(scrolledTopOffset);
  }

  private getTopPosition(): number {
    return window.scrollY;
  }
}
