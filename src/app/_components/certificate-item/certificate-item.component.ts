import { Component, Input } from '@angular/core';
import { SecundaryButtonComponent } from '../secundary-button/secundary-button.component';
import { RouterLink } from "@angular/router";

@Component({
    selector: 'app-certificate-item',
    imports: [SecundaryButtonComponent, RouterLink],
    templateUrl: './certificate-item.component.html',
})
export class CertificateItemComponent {
    @Input({ required: true }) name!: string
    @Input({ required: true }) date!: string
}
