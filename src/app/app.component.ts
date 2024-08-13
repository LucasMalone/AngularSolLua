import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuintoComponenteComponent } from "./quinto-componente/quinto-componente.component";
import { SextoComponenteComponent } from "./sexto-componente/sexto-componente.component";
import { SetimoComponenteComponent } from "./setimo-componente/setimo-componente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuintoComponenteComponent, SextoComponenteComponent, SetimoComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quinto-componente';
}
