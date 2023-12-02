// column.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column',
  template: '<div [style.display]="display" [style.flex-direction]="flexDirection" [style.align-items]="crossAxisAlignment" [style.justify-content]="mainAxisAlignment"><ng-content></ng-content></div>',
  styles: [],
  imports:[],
  //templateUrl: './column.component.html',
  //styleUrl: './column.component.css',
  standalone: true,
})
export class ColumnComponent {
  @Input() display: string = 'flex';
  @Input() flexDirection: string = 'column';
  @Input() crossAxisAlignment: string = 'flex-start';
  @Input() mainAxisAlignment: string = 'flex-start';
}
