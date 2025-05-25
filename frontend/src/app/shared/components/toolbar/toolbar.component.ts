import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TitleComponent } from '@shared/components';

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
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    TitleComponent,
    MatToolbarModule,
  ],
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
