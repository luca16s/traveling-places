import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MapsComponent } from '@components';
import { Local } from '@models';
import { Observable } from 'rxjs';

@Component({
  selector: 'iso-lugares-visitados',
  imports: [MapsComponent],
  standalone: true,
  templateUrl: './lugares-visitados.component.html',
  styleUrl: './lugares-visitados.component.scss',
})
export class LugaresVisitadosComponent implements OnInit {
  private http = inject(HttpClient);

  protected locais$: Observable<Local[]> | null | undefined;

  ngOnInit(): void {
    this.locais$ = this.getLocalidades();
  }

  protected getLocalidades(): Observable<Local[]> | null | undefined {
    return this.http.get<Local[]>('/assets/data/locais.json');
  }
}
