import { Component, EventEmitter, Input, Output } from '@angular/core';

import { SideMenuComponent } from '@shared/components';

@Component({
  selector: 'iso-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [SideMenuComponent],
})
export class SidebarComponent {
  @Input() menuPath!: string;

  @Output() pageTitle: EventEmitter<string> = new EventEmitter<string>();

  onPreencherTitle(title: string): void {
    this.pageTitle.emit(title);
  }
}
