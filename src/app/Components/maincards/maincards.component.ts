import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maincards',
  standalone: true,
  imports: [],
  templateUrl: './maincards.component.html',
  styleUrl: './maincards.component.css'
})
export class MaincardsComponent {
  @Input() url = '';
  @Input() title = '';

}
