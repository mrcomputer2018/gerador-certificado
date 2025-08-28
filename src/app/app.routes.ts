import { Routes } from '@angular/router';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { CertificateFormComponent } from './pages/certificate-form/certificate-form.component';
import { CertificatePageComponent } from './pages/certificate-page/certificate-page.component';

export const routes: Routes = [
    {
        path: '',
        component: CertificatesComponent
    },
    {
        path: 'certificates/new',
        component: CertificateFormComponent
    },
    {
        path: 'certificates/:id',
        component: CertificatePageComponent
    }
]
