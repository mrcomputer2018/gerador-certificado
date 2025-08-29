import { Component, Input } from '@angular/core';
import { SecundaryButtonComponent } from '../secundary-button/secundary-button.component';
import { Router, RouterLink } from "@angular/router";

@Component({
    selector: 'app-certificate-item',
    imports: [SecundaryButtonComponent],
    templateUrl: './certificate-item.component.html',
})
export class CertificateItemComponent {
    constructor(private router: Router) {}

    @Input({ required: true }) name!: string
    @Input({ required: true }) date!: string

    id: string = '5';

    viewCertificate(id: string) {
        this.router.navigate(['/certificates', id]);
    }
}
