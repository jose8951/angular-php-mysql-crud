import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para los filtros y pipes
import { FormsModule } from '@angular/forms';
import { LISTA_POKEMON, Pokemon } from '../../models/pokemon.data';
import { Navbar } from "../navbar/navbar";

@Component({
  selector: 'app-pokemon-list',
  imports: [Navbar,CommonModule,FormsModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList {
  // 1. Fuente de datos original (70 Pokémon)
  private todosLosPokemons: Pokemon[] = LISTA_POKEMON;
  
  // 2. Lista que se renderiza en el HTML
  public pokemonsMostrados: Pokemon[] = [...this.todosLosPokemons];

  // 3. Variables de estado para los filtros
  public textoBusqueda: string = '';
  public filtroActual: string = 'Todos';

  /**
   * Filtra la lista basándose en el nombre escrito y el hábitat seleccionado.
   * @param habitat Opcional: El hábitat que viene del clic en los botones.
   */
  aplicarFiltros(habitat?: string): void {
    // Si el usuario hizo clic en un botón de hábitat, actualizamos el estado
    if (habitat) {
      this.filtroActual = habitat;
    }

    // Aplicamos ambos filtros a la vez (Nombre + Hábitat)
    this.pokemonsMostrados = this.todosLosPokemons.filter(poke => {
      const coincideNombre = poke.nombre
        .toLowerCase()
        .includes(this.textoBusqueda.toLowerCase());
      
      const coincideHabitat = 
        this.filtroActual === 'Todos' || poke.habitat === this.filtroActual;

      return coincideNombre && coincideHabitat;
    });
  }

  /**
   * Gestiona errores de carga en las imágenes de la PokéAPI.
   */
  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    const fallback = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png';
    
    // Evita el bucle infinito si el fallback también falla
    if (img.src !== fallback) {
      img.src = fallback;
    }
  }

  /**
   * Limpia todos los filtros y el buscador.
   */
  limpiarFiltros(): void {
    this.textoBusqueda = '';
    this.filtroActual = 'Todos';
    this.pokemonsMostrados = [...this.todosLosPokemons];
  }
}