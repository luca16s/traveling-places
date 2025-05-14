import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { MapsComponent } from '@components';
import { Localidade } from '@models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [MapsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  private http = inject(HttpClient);

  protected getLocalidades(): Observable<Localidade[]> | null | undefined {
    return this.http.get<Localidade[]>('/assets/data/locais.json');
  }
}
