import { Component } from '@angular/core';
import { SidebarPageComponent } from "../../../sidebar/views/sidebar-page/sidebar-page.component";
import { AuthPageComponent } from "../../../auth/views/auth-page/auth-page.component";

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [SidebarPageComponent, AuthPageComponent],
  templateUrl: './content-page.component.html',
  styleUrl: './content-page.component.css'
})
export class ContentPageComponent {

}
