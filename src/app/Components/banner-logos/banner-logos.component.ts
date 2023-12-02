import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RowComponent } from "../row/row.component";
import { ImagenComponent } from "../imagen/imagen.component";
import { ColumnComponent } from "../column/column.component";
import { RouterLink } from '@angular/router';
import { BotonComponent } from "../boton/boton.component";

@Component({
    selector: 'app-banner-logos',
    standalone: true,
    templateUrl: './banner-logos.component.html',
    styleUrl: './banner-logos.component.css',
    imports: [CommonModule, RowComponent, ImagenComponent, ColumnComponent, RouterLink, BotonComponent]
})
export class BannerLogosComponent {

}
