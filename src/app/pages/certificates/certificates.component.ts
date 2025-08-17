import { Component } from '@angular/core';
import { PageTitleComponent } from "../../_components/page-title/page-title.component";
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";

@Component({
    selector: 'app-certificates',
    imports: [PageTitleComponent, SecundaryButtonComponent],
    templateUrl: './certificates.component.html',
})
export class CertificatesComponent {}
