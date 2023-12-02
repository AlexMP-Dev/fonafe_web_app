
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  template: `
  <button
    [style.width]="width"
    [style.height]="height"
    [style.background-color]="backgroundColor"
    [style.border]="border"
    [style.color]="hoverTextColor.length === 0 ? textColor : hovered ? hoverTextColor : textColor"
    (mouseenter)="onMouseEnter()"
    (mouseleave)="onMouseLeave()"
    (click)="onClick.emit()">
    {{ label }}
  </button>
`,
  styles: [],
  selector: 'app-boton',
  standalone: true,
  imports: [CommonModule ],
})
export class BotonComponent {
  @Input() label: string = 'Button'; // Texto del botón
  @Input() width: string = 'auto';   // Ancho del botón
  @Input() height: string = 'auto';  // Altura del botón
  @Input() backgroundColor: string = '#4CAF50'; // Color de fondo del botón
  @Input() border: string = '1px solid #000';
  @Input() textColor: string = 'black';
  @Input() hoverTextColor: string = '';
  @Input() hoverStyles: { [key: string]: string } = {};
  @Output() onClick: EventEmitter<void> = new EventEmitter<void>();

  hovered: boolean = false;

  onMouseEnter() {
    this.hovered = true;
  }

  onMouseLeave() {
    this.hovered = false;
  }
  // Puedes agregar más propiedades según tus necesidades (por ejemplo, estilo de texto, color de texto, etc.).
}
