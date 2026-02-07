import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
constructor(private router:Router){}

logout(){
  // Borramos los datos del usuario del navegador
  localStorage.removeItem('usuarioLogueado');
  // Redirigimos al Login
  this.router.navigate(['/login']);
}
}
