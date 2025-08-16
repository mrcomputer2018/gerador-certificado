import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-button',
  imports: [],
  templateUrl: './primary-button.component.html',
})
export class PrimaryButtonComponent {
    @Input({required: true}) label!: string
}
