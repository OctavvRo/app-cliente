import { Component } from "@angular/core";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { RouterOutlet } from "@angular/router";
import { ProductoComponent } from "./pantallas/producto/producto.component";
import { UsuarioComponent } from "./pantallas/home/usuario.component";
import { CartComponent } from "./cart/cart.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ProductoComponent, UsuarioComponent, NavbarComponent, RouterOutlet, CartComponent
    
  ]
})
export class AppComponent {

  constructor() {}

 
}
