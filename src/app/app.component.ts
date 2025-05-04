import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { MapsComponent } from '@components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MapsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
