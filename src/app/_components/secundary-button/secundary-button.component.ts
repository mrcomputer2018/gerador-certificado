import { Component, Input } from '@angular/core';
<<<<<<< HEAD
import { CommonModule } from '@angular/common';
=======
import { CommonModule } from '@angular/common';;
import { RouterLink } from '@angular/router';
>>>>>>> 9862d0326d2c1c8db020e005869edeb230fcc1b2

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
