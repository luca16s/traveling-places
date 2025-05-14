import { MatToolbarModule } from '@angular/material/toolbar';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { TitleComponent } from '@shared/components';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'iso-toolbar',
  host: {
    class: 'toolbar',
  },
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, TitleComponent],
})
export class ToolbarComponent {
  @Input() showMenu = true;

  @Input() pageTitle: string = '';

  @Input() showFullscreenMenu = true;

  @Input() navLinks: string[] = [''];

  @Input() logoAplicacao: string = '';

  @Input() nomeAplicacao: string = '';

  @Output() toggleSidenav = new EventEmitter<void>();
}
