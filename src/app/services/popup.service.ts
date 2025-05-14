import { Injectable } from '@angular/core';
import { Localidade } from '@models';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor() {}

  openPopup(local: Localidade | null | undefined): string {
    if (!local) {
      console.error('Propriedades não definidas.');
      return '';
    }

    return `
      <div>
        <h3>${local.nome}</h3>
      </div>
    `;
  }
}
