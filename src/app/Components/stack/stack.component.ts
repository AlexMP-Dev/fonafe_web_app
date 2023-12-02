
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [],
  template: '<div [style.display]="display" [style.height]="height" [style.flex-direction]="flexDirection" [style.align-items]="alignment" [style.justify-content]="justification" [style.position]="position"><ng-content></ng-content></div>',
  styles: []
})
export class StackComponent {
  @Input() display: string = '';
  @Input() flexDirection: string = 'row';
  @Input() height: string = 'auto';
  @Input() alignment: string = 'stretch';
  @Input() justification: string = 'flex-start';
  @Input() position: string = '';
}
