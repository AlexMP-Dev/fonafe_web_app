
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [],
  template: '<div [style.gap]="gap" [style.display]="display" [style.grid-template-columns]="gridTemplateColumns"><ng-content></ng-content></div>',
  styles: [],
})
export class GridComponent {
  @Input() display: string = 'grid';
  @Input() gridTemplateColumns: string = 'repeat(auto-fit, minmax(min(120px, 100%), 1fr))';
  @Input() gap: string = '';
}
