import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'iso-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormFieldModule],
})
export class SearchComponent {
  @Input() label: string = 'Pesquisar: ';
  @Input() placeholder: string = 'termo';
  @Output() aplicarFiltro: EventEmitter<string> = new EventEmitter();

  searchedTerm: string = '';

  applyFilter() {
    this.aplicarFiltro.emit(this.searchedTerm);
  }
}
