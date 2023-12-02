import { Component } from '@angular/core';
import { RowComponent } from "../../Components/row/row.component";
import { ContainerComponent } from "../../Components/container/container.component";
import { ColumnComponent } from "../../Components/column/column.component";
import { ImagenComponent } from "../../Components/imagen/imagen.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-loginpage',
    standalone: true,
    templateUrl: './loginpage.component.html',
    styleUrl: './loginpage.component.css',
    imports: [RowComponent, ContainerComponent, ColumnComponent, ImagenComponent,RouterLink]
})
export class LoginpageComponent {

}
