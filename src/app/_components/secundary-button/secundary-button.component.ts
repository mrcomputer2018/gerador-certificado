import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-secundary-button',
    imports: [],
    templateUrl: './secundary-button.component.html',
})
export class SecundaryButtonComponent {
    @Input({ required: true }) label!: string
}
