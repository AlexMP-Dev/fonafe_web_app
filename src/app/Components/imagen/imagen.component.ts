
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imagen',
  standalone: true,
  imports: [],
  template: '<img [src]="source" [alt]="alt" [style.width]="width" [style.height]="height" [style.position]="position" [style.z-index]="zindex"/>',
  styles: [],
})
export class ImagenComponent {
  @Input() source: string = ''; // Ruta de la imagen
  @Input() alt: string = '';    // Texto alternativo para la imagen
  @Input() width: string = '100%';  // Ancho de la imagen
  @Input() height: string = 'auto';
  @Input() position: string = '';
  @Input() zindex: string = '';
}
