import { Component } from '@angular/core';
import { RowComponent } from "../../Components/row/row.component";
import { BotonComponent } from "../../Components/boton/boton.component";
import { StackComponent } from "../../Components/stack/stack.component";
import { ContainerComponent } from "../../Components/container/container.component";
import { ImagenComponent } from "../../Components/imagen/imagen.component";
import { GridComponent } from "../../Components/grid/grid.component";
import { ColumnComponent } from "../../Components/column/column.component";

@Component({
    selector: 'app-homepage',
    standalone: true,
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
    imports: [RowComponent, BotonComponent, StackComponent, ContainerComponent, ImagenComponent, GridComponent, ColumnComponent]
})
export class HomepageComponent {

}
