import { Routes } from '@angular/router';
import { HomeComponent } from './pantallas/home/home.component';
import { ProductoComponent } from './pantallas/producto/producto.component';
import { UsuarioComponent } from './pantallas/home/usuario.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [

{
    path: '',
    component: HomeComponent
},
{
    path: 'productos',
    component: ProductoComponent,

},
{
    path: 'usuarios',
    component: UsuarioComponent,
},
{
    path: 'carrito',
    component: CartComponent,
}

];



