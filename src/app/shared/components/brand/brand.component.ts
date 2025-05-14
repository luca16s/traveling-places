import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'iso-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class BrandComponent {
  @Input() logoAplicacao: string = '';

  @Input() nomeAplicacao: string = '';
}
