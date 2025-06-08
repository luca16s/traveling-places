import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AddViagemComponent, ListaViagemComponent } from '@components';

@Component({
  selector: 'iso-viagem',
  imports: [AddViagemComponent, ListaViagemComponent],
  standalone: true,
  styleUrl: './viagem.component.scss',
  templateUrl: './viagem.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViagemComponent {}
