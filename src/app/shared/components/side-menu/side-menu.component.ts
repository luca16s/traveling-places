import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

import { Menu, MenuItem } from '@shared/models';
import { ConvertWithFunctionPipe, OrderByPipe } from '@shared/pipes';

@Component({
  selector: 'iso-sidemenu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    ConvertWithFunctionPipe,
    OrderByPipe,
  ],
})
export class SideMenuComponent {
  @Input() menuPath!: string;

  @Output() toggleSidenav = new EventEmitter<void>();

  @Output() pageTitle: EventEmitter<string> = new EventEmitter<string>();

  menus$!: Observable<Menu[]>;

  http = inject(HttpClient);

  constructor() {
    this.menus$ = this.http.get<Menu[]>(
      this.menuPath ?? './../../../../assets/data/menu.json'
    );
  }

  public toMenu(value: any): Menu[] {
    return value as Menu[];
  }

  onPreencherTitle(menu: MenuItem): void {
    this.pageTitle.emit(menu.breadcrumb);
  }

  getRoute = (menu: MenuItem): string | null => {
    return menu.route;
  };
}
