import { Component } from '@angular/core';
import { PageTitleComponent } from '../../_components/page-title/page-title.component';
import { PrimaryButtonComponent } from "../../_components/primary-button/primary-button.component";
import { SecundaryButtonComponent } from "../../_components/secundary-button/secundary-button.component";
import { CommonModule } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
    selector: 'app-certificate-form',
    imports: [PageTitleComponent, PrimaryButtonComponent, SecundaryButtonComponent, CommonModule, FormsModule],
    templateUrl: './certificate-form.component.html',
})
export class CertificateFormComponent {
    hasError: boolean = false;
    name: string = '';
    activity: string = '';
    activityList: string[] = ["Configuração com Angular CLI", "Introdução ao TypeScript", "Componentes e Templates" ];

    validateForm(control: NgModel) {
        return control.invalid && control.touched;
    }
}
