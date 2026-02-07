// src/app/models/empleado.model.ts

export interface Empleado {
  id: number; // Lo dejamos obligatorio para que el Dashboard no falle
  nombre: string;
  puesto: string;
  departamento: string;
  telefono: string;
  email: string;
  estado: 'activo' | 'inactivo';
  fecha_ingreso?: string;
}

export interface Usuario {
  id?: number; 
  nombre_completo: string;
  email: string;
  password?: string;
  rol: string;
  creado_en?: string;
}