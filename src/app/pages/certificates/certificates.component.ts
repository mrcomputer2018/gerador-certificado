import { Component } from '@angular/core';
import { PageTitleComponent } from "../../_components/page-title/page-title.component";
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { CertificateItemComponent } from "../../_components/certificate-item/certificate-item.component";

@Component({
    selector: 'app-certificates',
    imports: [PageTitleComponent, SecundaryButtonComponent, CertificateItemComponent],
    templateUrl: './certificates.component.html',
})
export class CertificatesComponent {
    existsCetificate:boolean = true
}
