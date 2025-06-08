import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { Menu } from '@shared/models';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CastPipe, OrderByPipe } from '@shared/pipes';
import { environment } from '@env';

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
    CastPipe,
    OrderByPipe,
  ],
})
export class SideMenuComponent {
  @Output() toggleSidenav = new EventEmitter<void>();

  @Output() pageTitle: EventEmitter<string> = new EventEmitter<string>();

  menus$!: Observable<Menu[]>;

  http = inject(HttpClient);

  constructor() {
    this.menus$ = this.http.get<Menu[]>(
      `${environment.baseApiUrl}${environment.menuPath}`
    );
  }

  public toMenu(value: any): Menu[] {
    return value as Menu[];
  }

  onPreencherTitle(menu: Menu): void {
    this.pageTitle.emit(menu.breadcrumb);
  }

  getRoute = (x: { menu: Menu; submenu: Menu }): string | null => {
    if (!x || !x.menu || !x.submenu) {
      return null;
    }

    console.log('getRoute', `${x.menu.route}/${x.submenu.route}`);

    return `${environment.baseRoute}/${x.menu.route}/${x.submenu.route}`;
  };
}
