import { Component } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { PrimaryButtonComponent } from './_components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from "./_components/secundary-button/secundary-button.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, PrimaryButtonComponent, SecundaryButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';

  displayNavbar: boolean = false
}
