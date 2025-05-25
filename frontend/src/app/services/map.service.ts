import { Injectable } from '@angular/core';
import leaflet, { map } from 'leaflet';
import { Coordenada, Local } from '@models';
import { iconPath, TipoLocalIcon } from '@enums';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map: leaflet.Map | null | undefined;

  private getIconPath(localidade: Local): string | undefined | null {
    if (
      localidade === null ||
      localidade === undefined ||
      localidade.tipo === null ||
      localidade.tipo === undefined
    ) {
      throw new Error('Tipo de localidade não definido.');
    }

    const iconType = TipoLocalIcon.get(localidade.tipo);

    if (iconType === undefined) {
      throw new Error('Tipo de localidade inválido.');
    }

    return iconPath.get(iconType);
  }

  private addIcon(local: Local): void {
    if (!this.map) {
      console.error('Mapa não definido.');
      return;
    }

    if (!local) {
      console.error('Localidade não definida.');
      return;
    }

    if (!local.endereco || !local.endereco.coordenadas) {
      console.error('Coordenadas não definidas.');
      return;
    }

    if (
      !local.endereco.coordenadas.latitude ||
      !local.endereco.coordenadas.longitude
    ) {
      console.error('Coordenadas inválidas.');
      return;
    }

    var marcadores = new leaflet.FeatureGroup();

    const marker = leaflet.marker(
      [
        local.endereco.coordenadas.latitude,
        local.endereco.coordenadas.longitude,
      ],
      {
        icon: leaflet.icon({
          iconUrl: this.getIconPath(local) ?? '',
        }),
      }
    );

    marcadores.addLayer(marker);

    this.map.whenReady(() => {
      if (this.map) {
        this.map.addLayer(marcadores);
      }
    });

    this.map.on('zoomend', () => {
      if (this.map && this.map.getZoom() < 10) {
        this.map.removeLayer(marcadores);
      } else if (this.map) {
        this.map.addLayer(marcadores);
      }
    });
  }

  public createMap(
    divName: string,
    mapZoom: number,
    mapCenter: Coordenada | null | undefined
  ): MapService {
    this.map = leaflet.map(divName, {
      zoom: mapZoom,
      preferCanvas: true,
    });

    if (mapCenter) {
      this.map.setView([mapCenter.latitude, mapCenter.longitude], mapZoom, {
        animate: true,
      });
    } else {
      this.getCurrentLocation();
    }

    return this;
  }

  public getCurrentLocation(): void {
    this.map?.locate({
      setView: true,
      maxZoom: 18,
      watch: true,
      enableHighAccuracy: true,
    });
  }

  public addMapStyle(): MapService {
    if (!this.map) {
      throw new Error('Mapa não definido.');
    }

    leaflet
      .tileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}.png',
        {
          minZoom: 3,
          maxZoom: 18,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> &copy; <a href="http://www.cartodb.com/attributions" target="_blank">CartoDB</a>',
        }
      )
      .addTo(this.map);

    return this;
  }

  public addIcons(
    localidades: Observable<Local[]> | null | undefined
  ): MapService {
    if (!this.map) {
      throw new Error('Mapa não definido.');
    }

    if (!localidades) {
      throw new Error('Localidades não definidas.');
    }

    localidades.subscribe((locais) => {
      if (locais.length === 0) {
        console.error('Nenhuma localidade encontrada.');
        return;
      }

      locais.forEach((local) => {
        this.addIcon(local);
      });
    });

    return this;
  }
}
