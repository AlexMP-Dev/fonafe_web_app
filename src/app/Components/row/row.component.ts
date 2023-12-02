// row.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-row',
  template: '<div [style.overflow-x]="overflowX" [style.transform]="transform" [style.min-height]="minheight" [style.flex-wrap]="flexWrap" [style.display]="display" [style.flex-direction]="flexDirection" [style.align-items]="crossAxisAlignment" [style.justify-content]="mainAxisAlignment" [style.background-color]="backgroundColor" [style.height]="height"><ng-content></ng-content></div>',
  styles: [],
  standalone: true,
  imports: [],
  //templateUrl: './row.component.html',
  //styleUrl: './row.component.css'
})
export class RowComponent {
  @Input() display: string = 'flex';
  @Input() flexDirection: string = 'row';
  @Input() crossAxisAlignment: string = 'flex-start';
  @Input() mainAxisAlignment: string = 'flex-start';
  @Input() backgroundColor: string = 'transparent';
  @Input() height: string = 'auto';
  @Input() minheight: string = 'auto';
  @Input() flexWrap: string = 'wrap';
  @Input() transform: string = '';
  @Input() overflowX: string = '';
}
