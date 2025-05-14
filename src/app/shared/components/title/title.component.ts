import { Component, Input } from '@angular/core';

@Component({
    selector: 'iso-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    standalone: true
})
export class TitleComponent {
  @Input() pageTitle: string = '';
}
