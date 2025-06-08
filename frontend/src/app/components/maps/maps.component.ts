import { Local } from '../../models/local';
import {
  AfterViewInit,
  Component,
  inject,
  Input,
} from '@angular/core';
import { MapService } from '@services';
import { Observable } from 'rxjs';
import { Coordenada } from '@models';

@Component({
  imports: [],
  standalone: true,
  selector: 'iso-maps',
  styleUrl: './maps.component.scss',
  templateUrl: './maps.component.html',
})
export class MapsComponent implements AfterViewInit {
  private mapService: MapService = inject(MapService);

  @Input() mapZoom: number = 18;

  @Input() mapCenter: Coordenada | null | undefined;

  @Input() locais: Observable<Local[]> | null | undefined;

  constructor() {}

  ngAfterViewInit(): void {
    this.mapService
      .createMap('map', this.mapZoom, this.mapCenter)
      .addMapStyle()
      .addIcons(this.locais);
  }
}
