import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { BannerLogosComponent } from './Components/banner-logos/banner-logos.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MaincardsComponent } from './Components/maincards/maincards.component';
import { RowComponent } from "./Components/row/row.component";
import { ColumnComponent } from "./Components/column/column.component";
import { ContainerComponent } from "./Components/container/container.component";
import { ImagenComponent } from './Components/imagen/imagen.component';
import { BotonComponent } from "./Components/boton/boton.component";
import { StackComponent } from "./Components/stack/stack.component";
import { GridComponent } from "./Components/grid/grid.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BannerLogosComponent, NavbarComponent, MaincardsComponent, RowComponent, ColumnComponent, ContainerComponent, ImagenComponent, BotonComponent, StackComponent, GridComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fonafe_web_app';

  constructor(private router: Router) {}

  shouldShowNavbar(): boolean {
    // Obtén la ruta actual y decide si mostrar o no el navbar
    const currentRoute = this.router.url;
    return currentRoute !== '/login'; // Muestra el navbar en todas las rutas excepto '/login'
  }
}
