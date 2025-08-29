import { Component } from '@angular/core';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { UiBaseComponent } from './_components/ui-base/ui-base.component';
<<<<<<< HEAD
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [NavbarComponent, UiBaseComponent, RouterOutlet],
=======
import { RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-root',
    imports: [
    NavbarComponent,
    UiBaseComponent,
    RouterOutlet
],
>>>>>>> 9862d0326d2c1c8db020e005869edeb230fcc1b2
    templateUrl: './app.component.html',
})
export class AppComponent {
    title = 'gerador-certificado';

    displayNavbar: boolean = true;
}
