import { Localidade } from '../../models/localidade';
import { AfterViewInit, Component, inject, Input } from '@angular/core';
import * as leaflet from 'leaflet';
import { MarkerService } from '@services';
import { Observable } from 'rxjs';

@Component({
  imports: [],
  standalone: true,
  selector: 'iso-maps',
  styleUrl: './maps.component.scss',
  templateUrl: './maps.component.html',
})
export class MapsComponent implements AfterViewInit {
  private map: leaflet.Map | undefined;

  private markerService: MarkerService = inject(MarkerService);

  @Input() localidades: Observable<Localidade[]> | null | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.initMap();

    this.localidades?.subscribe((res) => {
      res.forEach((local) => {
        this.markerService.addIcon(this.map, local);
      });
    });
  }

  private initMap(): void {
    this.map = leaflet.map('map', {
      zoom: 18,
      preferCanvas: true,
      center: [-22.810834345203975, -43.430979833188864],
    });

    leaflet
      .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      })
      .addTo(this.map);
  }
}
