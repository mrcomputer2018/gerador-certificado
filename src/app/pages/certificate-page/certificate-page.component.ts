import { Component } from '@angular/core';
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-certificate-page',
    imports: [SecundaryButtonComponent, RouterLink],
    templateUrl: './certificate-page.component.html',
})
export class CertificatePageComponent {}
