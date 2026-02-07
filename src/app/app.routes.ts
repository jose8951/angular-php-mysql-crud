import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Contactos } from './components/contactos/contactos';
import { Perfil } from './components/perfil/perfil';
import { Usuarios } from './components/usuarios/usuarios';
import { TiendaGenericaComponent } from './components/tienda-ikea/tienda-ikea';
import { SuperHeroe } from './components/super-heroe/super-heroe';
import { PokemonList } from './components/pokemon-list/pokemon-list';

import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },

  // Rutas Protegidas
  { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
  { path: 'contactos', component: Contactos, canActivate: [authGuard] },
  { path: 'perfil', component: Perfil, canActivate: [authGuard] },
  { path: 'usuarios', component: Usuarios, canActivate: [authGuard] },
  { path: 'tienda', component: TiendaGenericaComponent, canActivate: [authGuard] },
   { path: 'super-heroe', component: SuperHeroe, canActivate: [authGuard] },
   {path: 'pokemonList', component: PokemonList, canActivate:[authGuard]},

  { path: '**', redirectTo: 'login' },
];
