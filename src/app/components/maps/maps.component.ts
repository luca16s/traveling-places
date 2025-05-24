import { Local } from '../../models/local';
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

  @Input() mapZoom: number = 18;

  @Input() mapCenter: leaflet.LatLngExpression = [
    -22.81135925435108, -43.430944215754835,
  ];

  @Input() localidades: Observable<Local[]> | null | undefined;

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
      zoom: this.mapZoom,
      preferCanvas: true,
      center: this.mapCenter,
    });

    leaflet
      .tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          maxZoom: 18,
          minZoom: 3,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="http://www.cartodb.com/attributions" target="_blank">CartoDB</a>',
        }
      )
      .addTo(this.map);
  }
}
