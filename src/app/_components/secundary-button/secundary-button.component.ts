import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';;
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-secundary-button',
    imports: [CommonModule, RouterLink],
    templateUrl: './secundary-button.component.html',
})
export class SecundaryButtonComponent {
    @Input({ required: true }) label!: string;
    @Input() icon?: string;

    getIconClasses(): string {
        return `ph ${this.icon} h-5 w-5`;
    }
}
