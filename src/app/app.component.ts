import { CommonModule } from '@angular/common';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatIconRegistry } from '@angular/material/icon';
import {
  ChangeDetectorRef,
  Component,
  inject,
  Input,
  ViewChild,
} from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

import { environment } from '@env';
import {
  BrandComponent,
  SidebarComponent,
  ToolbarComponent,
} from '@shared/components';
import { MapsComponent } from '@components';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Local } from '@models';
import { HomeComponent } from '@pages';

@Component({
  selector: 'iso-root',
  imports: [
    CommonModule,
    MatSidenavModule,
    ToolbarComponent,
    BrandComponent,
    SidebarComponent,
    MapsComponent,
    HomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  @Input() menuPath: string = environment.menuPath;

  private http = inject(HttpClient);

  constructor(
    private matIconReg: MatIconRegistry,
    media: MediaMatcher,
    cdr: ChangeDetectorRef
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1024px)');
    this.mobileQueryListener = () => cdr.detectChanges();

    if (this.mobileQuery.addEventListener) {
      this.mobileQuery.addEventListener('change', () => {
        this.mobileQueryListener();
      });
    }

    this.isShowSidebar = this.mobileQuery.matches;
  }

  ngOnInit(): void {
    this.matIconReg.setDefaultFontSetClass('material-symbols-outlined');
  }

  nomeAplicacao = environment.appName;
  logoAplicacao = environment.appLogo;
  isShowSidebar: boolean;
  pageTitle: string = '';
  mobileQuery: MediaQueryList;

  private mobileQueryListener: () => void;

  protected getLocalidades(): Observable<Local[]> | null | undefined {
    return this.http.get<Local[]>('/assets/data/locais.json');
  }

  onPreencherTitle($event: string): void {
    this.pageTitle = $event;
  }

  public ngOnDestroy(): void {
    if (this.mobileQuery.removeEventListener) {
      this.mobileQuery.removeEventListener('change', () => {
        this.mobileQueryListener();
      });
    }
    this.sidenav.close();
  }
}
