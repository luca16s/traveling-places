import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  imports: [],
  standalone: true,
  selector: 'app-maps',
  styleUrl: './maps.component.scss',
  templateUrl: './maps.component.html',
})
export class MapsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    this.initMap();
  }

  private map: L.Map | undefined;

  private initMap(): void {
    this.map = L.map('map', {
      center: [0, 0],
      zoom: 3,
    });

    const tiles = L.tileLayer(
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        maxZoom: 18,
        minZoom: 3,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    );

    tiles.addTo(this.map);
  }
}
