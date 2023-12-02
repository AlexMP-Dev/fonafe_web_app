import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  //templateUrl: './container.component.html',
  //styleUrl: './container.component.css',
  standalone: true,
  imports: [],
  template: `<div
    [style.flex-direction]="flexDirection"
    [style.display]="display"
    [style.align-items]="crossAxisAlignment"
    [style.justify-content]="mainAxisAlignment"
    [style.border-radius]="borderRadius"
    [style.box-shadow]="boxShadow"
    [style.color]="color"
    [style.text-align]="textAlign"
    [style.width]="width"
    [style.top]="top"
    [style.bottom]="bottom"
    [style.left]="left"
    [style.right]="right"
    [style.transform]="transform"
    [style.height]="height"
    [style.margin]="margin"
    [style.padding]="padding"
    [style.background-color]="backgroundColor"
    [style.background]="background"
    [style.position]="position"
    [style.z-index]="zindex"
  >
    <ng-content></ng-content>
  </div>`,
  styles: [],
})
export class ContainerComponent {
  @Input() display: string = 'flex';
  @Input() flexDirection: string = 'column';
  @Input() width: string = '100%';
  @Input() height: string = 'auto';
  @Input() margin: string = '0';
  @Input() padding: string = '0';
  @Input() backgroundColor: string = '';
  @Input() background: string = '';
  @Input() position: string = '';
  @Input() zindex: string = '';
  @Input() top: string = '';
  @Input() bottom: string = '';
  @Input() left: string = '';
  @Input() right: string = '';
  @Input() transform: string = '';
  @Input() textAlign: string = '';
  @Input() crossAxisAlignment: string = '';
  @Input() mainAxisAlignment: string = '';
  @Input() color: string = '';
  @Input() borderRadius: string = '';
  @Input() boxShadow: string = '';
  @Input() hoverEffect: string = '';

  hovered: boolean = false;

  onMouseEnter() {
    this.hovered = true;
  }

  onMouseLeave() {
    this.hovered = false;
  }
}
