import { Component } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { UiBaseComponent } from './_components/ui-base/ui-base.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [NavbarComponent, UiBaseComponent, RouterOutlet],
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'gerador-certificado';

    displayNavbar: boolean = true;
}
