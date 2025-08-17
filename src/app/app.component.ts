import { Component } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { PrimaryButtonComponent } from './_components/primary-button/primary-button.component';
import { SecundaryButtonComponent } from './_components/secundary-button/secundary-button.component';
import { CertificateItemComponent } from './_components/certificate-item/certificate-item.component';
import { UiBaseComponent } from './_components/ui-base/ui-base.component';
import { CertificatesComponent } from "./pages/certificates/certificates.component";

@Component({
    selector: 'app-root',
    imports: [
    NavbarComponent,
    UiBaseComponent,
    CertificatesComponent
],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'gerador-certificado';

    displayNavbar: boolean = false;
}
