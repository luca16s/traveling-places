import { iconPath, tipoLocalIcone } from '@enums';
import { inject, Injectable } from '@angular/core';
import leaflet from 'leaflet';
import { Localidade } from '@models';
import { PopupService } from './export';

@Injectable({
  providedIn: 'root',
})
export class MarkerService {
  private popupService: PopupService = inject(PopupService);

  constructor() {}

  private getIconPath(localidade: Localidade): string | undefined | null {
    if (
      localidade === null ||
      localidade === undefined ||
      localidade.tipo === null ||
      localidade.tipo === undefined
    ) {
      throw new Error('Tipo de localidade não definido.');
    }

    const iconType = tipoLocalIcone.get(localidade.tipo);

    if (iconType === undefined) {
      throw new Error('Tipo de localidade inválido.');
    }

    return iconPath.get(iconType);
  }

  public addIcon(
    map: leaflet.Map | undefined,
    local: Localidade | null | undefined
  ): void {
    if (!map || !local) {
      console.error('Mapa ou local não definido.');
      return;
    }

    leaflet
      .marker(
        [
          local.endereco.coordenadas.latitude,
          local.endereco.coordenadas.longitude,
        ],
        {
          icon: leaflet.icon({
            iconUrl: this.getIconPath(local) ?? '',
          }),
        }
      )
      .addTo(map)
      .bindPopup(this.popupService.openPopup(local))
      .bindTooltip(local.nome);
  }
}
