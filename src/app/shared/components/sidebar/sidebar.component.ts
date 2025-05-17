import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'iso-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [CommonModule, SideMenuComponent],
})
export class SidebarComponent {
  @Input() menuPath!: string;

  @Output() pageTitle: EventEmitter<string> = new EventEmitter<string>();

  onPreencherTitle(title: string): void {
    this.pageTitle.emit(title);
  }
}
