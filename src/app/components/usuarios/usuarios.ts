import { Component, OnInit } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../models/empleado.model';
import { Data } from '../../services/data';

@Component({
  selector: 'app-usuarios',
  imports: [CommonModule, FormsModule, Navbar],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios implements OnInit {
  listaUsuarios: Usuario[] = [];

  // Objeto vinculado al formulario
  usuario: Usuario = {
    id: 0,
    nombre_completo: '',
    email: '',
    password: '',
    rol: 'admin',
  };

  constructor(private dataService: Data) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }
  obtenerUsuarios() {
    this.dataService.getUsuarios().subscribe({
      next: (res: Usuario[]) => (this.listaUsuarios = res),
      error: (err) => console.error('Error al listar:', err),
    });
  }

  guardar() {
    //this.usuario.rol = this.usuario.rol.toLowerCase().trim() as any;
    if (!this.usuario.rol) {
      alert('Por favor selecciona un rol');
      return;
    }

    if (this.usuario.id && this.usuario.id > 0) {
      // MODIFICAR
      this.dataService.modificarUsuario(this.usuario).subscribe({
        next: (res: any) => {
          if (res.success) {
            alert('Usuario actualizado correctamente');
            this.finalizarOperacion();
          }
        },
        error: (err) => console.error('Error al modificar:', err),
      });
    } else {
      this.dataService.insertarUsuario(this.usuario).subscribe({
        next: (res: any) => {
          if (res.success) {
            alert('Usuario creado con éxito');
            this.finalizarOperacion();
          } else {
            // Si sale el error 1265 aquí, el PHP está recibiendo algo mal
            alert('Error de DB: ' + res.mensaje);
          }
        },
        error: (err) => console.error('Error al insertar:', err),
      });
    }
  }
  seleccionar(u: Usuario) {
    // Forzamos que el objeto tenga todos los datos, incluido el ID
    this.usuario = {
      id: Number(u.id),
      nombre_completo: u.nombre_completo,
      email: u.email,
      password: '', // La password la dejamos vacía al editar
      rol: u.rol,
    };
  }

  eliminar(id: number | undefined) {
    if (id && confirm('¿Eliminar este usuario?')) {
      this.dataService.eliminarUsuario(id).subscribe({
        next: (res: any) => {
          if (res.success) this.obtenerUsuarios();
        },
      });
    }
  }

  finalizarOperacion() {
    this.obtenerUsuarios();
    this.limpiar();
  }

  limpiar() {
    this.usuario = {
      id: 0,
      nombre_completo: '',
      email: '',
      password: '',
      rol: 'admin',
    };
  }
}
