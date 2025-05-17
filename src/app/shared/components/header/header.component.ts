import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'iso-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent {
  @Input() titulo = '';
  @Input() subtitulo = '';
  @Input() nav: string[] = [];
  @Input() hideBreadcrumb: boolean = false;
}
