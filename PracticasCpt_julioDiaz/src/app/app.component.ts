import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PInformationComponent } from "./components/p-information/p-information.component";
import { GInformationComponent } from "./components/g-information/g-information.component";
import { LicenseComponent } from "./components/license/license.component";
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PInformationComponent, GInformationComponent, LicenseComponent, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PracticasCpt_julioDiaz';
}
