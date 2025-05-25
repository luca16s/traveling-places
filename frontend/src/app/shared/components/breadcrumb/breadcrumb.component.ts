import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'iso-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule],
})
export class BreadCrumbComponent {
  @Input() nav: string[] = [];

  trackByNavlink(index: number, navlink: string): string {
    return navlink;
  }
}
