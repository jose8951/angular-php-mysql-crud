import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado, Usuario } from '../models/empleado.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Data {
  // Cambia esta URL por la ruta real donde tengas tus archivos PHP
  private API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // --- MÉTODOS EXISTENTES (Login y Contactos) ---
  login(credenciales: any): Observable<any> {
    // El login suele devolver un token o datos de sesión, no necesariamente un objeto Contacto
    return this.http.post<any>(`${this.API_URL}/login.php`, credenciales);
  }

  // listar contactos
  getContactos(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(`${this.API_URL}/listarContactos.php`);
  }

  guardarContacto(contacto: Empleado): Observable<any> {
    return this.http.post<any>(
      `${this.API_URL}/guardarContactos.php`,
      contacto,
    );
  }

  // En tu archivo data.ts
  eliminarContacto(id: number): Observable<any> {
    // Usamos un parámetro por URL (Query Params) para que el PHP lo reciba fácilmente
    return this.http.delete(`${this.API_URL}/eliminarContactos.php?id=${id}`);
  }

  // --- NUEVOS MÉTODOS PARA USUARIOS_SISTEMA ---

  // 1. Listar todos los usuarios
  getUsuarios(): Observable<Usuario[]> {
    // Corregido: Pedimos explícitamente un array de Usuario
    return this.http.get<Usuario[]>(`${this.API_URL}/listar_usuarios.php`);
  }

  insertarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/insertar_usuario.php`, usuario);
  }

  modificarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post<any>(
      `${this.API_URL}/modificar_usuario.php`,
      usuario,
    );
  }

  eliminarUsuario(id: number): Observable<any> {
    return this.http.delete<any>(
      `${this.API_URL}/eliminar_usuario.php?id=${id}`,
    );
  }
}
