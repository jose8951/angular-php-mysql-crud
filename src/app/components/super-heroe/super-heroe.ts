import { Component } from '@angular/core';
import { LISTA_HEROES, Heroe } from '../../models/superheroes.data';
import { Navbar } from '../navbar/navbar';
@Component({
  selector: 'app-super-heroe',
  imports: [Navbar],
  templateUrl: './super-heroe.html',
  styleUrl: './super-heroe.css',
})
export class SuperHeroe {
// Usamos el JSON que proporcionaste
  public heroes: Heroe[] = LISTA_HEROES;

onImageError(event: Event): void {
  const img = event.target as HTMLImageElement;
  const fallback = 'https://via.placeholder.com/400x600?text=Top+Secret';
  
  // Evitamos el bucle infinito: si la imagen ya es el fallback, no hacemos nada
  if (img.src !== fallback) {
    img.src = fallback;
  }
}
}