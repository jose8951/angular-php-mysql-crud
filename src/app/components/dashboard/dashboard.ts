import { Component, OnInit } from '@angular/core';
import { Data } from '../../services/data';
import { Navbar } from '../navbar/navbar';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

// ESTA LÍNEA ES OBLIGATORIA: Trae la "regla" de cómo debe ser un empleado
import { Empleado } from '../../models/empleado.model'; 

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [Navbar, FormsModule, CommonModule], 
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit {
  // Usamos la interfaz para que TypeScript nos ayude a no cometer errores
  listaContactos: Empleado[] = [];
  
  contacto: Empleado = { 
    id: 0, 
    nombre: '', 
    puesto: '', 
    departamento: '', 
    telefono: '', 
    email: '', 
    estado: 'activo' 
  };

  constructor(private dataService: Data) {}

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.dataService.getContactos().subscribe({
      // Aquí también especificamos que recibimos un array de Empleado
      next: (res: Empleado[]) => {
        this.listaContactos = res;
      },
      error: (err) => console.error('Error:', err)
    });
  }

  enviarFormulario() {
    this.dataService.guardarContacto(this.contacto).subscribe({
      next: (res: any) => {
        if (res.success) {
          alert('Operación realizada con éxito');
          this.obtenerDatos();
          this.limpiar();
        }
      }
    });
  }

  editar(item: Empleado) {
    this.contacto = { ...item };
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  borrar(id: number) {
    if (confirm('¿Deseas eliminar este registro?')) {
      this.dataService.eliminarContacto(id).subscribe({
        next: (res: any) => {
          if (res.success) this.obtenerDatos();
        }
      });
    }
  }

  limpiar() {
    this.contacto = { id: 0, nombre: '', puesto: '', departamento: '', telefono: '', email: '', estado: 'activo' };
  }
}