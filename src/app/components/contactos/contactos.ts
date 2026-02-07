import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar'; // Importamos la clase 'Navbar'

@Component({
  selector: 'app-contactos',
  standalone: true, 
  imports: [Navbar], // Usamos 'Navbar'
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos { }