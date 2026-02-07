import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Data } from '../../services/data'; // Verifica tu ruta al servicio
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  // Objeto para los datos del formulario
  user = {
    email: 'gabi@gabi.com',
    password: '123'
  };

  // Variable para el checkbox de ver contraseña
  verContrasena: boolean = false;

  constructor(private dataService: Data, private router: Router) {}

  onLogin() {
    // Llamada al servicio que conecta con PHP
    this.dataService.login(this.user).subscribe({
      next: (res) => {
        if (res.success) {
          // Si el login es correcto, guardamos datos y navegamos
          localStorage.setItem('usuarioLogueado', JSON.stringify(res.usuario));
          this.router.navigate(['/dashboard']);
        } else {
          // Si falla, mostramos el error que envía PHP
          alert(res.mensaje);
        }
      },
      error: (err) => {
        console.error('Error de conexión con el servidor', err);
        alert('No se pudo conectar con el servidor PHP');
      }
    });
  }
}
