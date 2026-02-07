import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DATOS_GENERICOS } from '../../models/tienda-ikea.data';
import { Navbar } from '../navbar/navbar';

// Definimos la estructura exacta para que TypeScript no de errores


@Component({
  selector: 'app-tienda-ikea',
  standalone: true,
  imports: [CommonModule,Navbar],
  templateUrl: './tienda-ikea.html',
  styleUrl: './tienda-ikea.css',
})
export class TiendaGenericaComponent {
  // Asignamos los datos del archivo independiente a propiedades del componente
  categorias = DATOS_GENERICOS.categoriasPrincipales;
  ofertas = DATOS_GENERICOS.ofertasDestacadas;
  productos = DATOS_GENERICOS.productos;

  // Función para manejar errores de carga de imagen (opcional, pero buena práctica)
  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'https://via.placeholder.com/300x300?text=Imagen+no+disponible';
  }
}