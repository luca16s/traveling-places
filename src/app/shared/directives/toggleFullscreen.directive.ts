import { Directive, HostListener } from '@angular/core';
import screenfull from 'screenfull';

@Directive({
  selector: '[isoToggleFullscreen]',
})
export class ToggleFullscreenDirective {
  @HostListener('click') onClick(): void {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }
}
