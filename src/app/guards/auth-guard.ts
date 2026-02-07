import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const usuario = localStorage.getItem('usuarioLogueado');

  if (usuario) {
    // Si hay datos en el storage, permitimos el acceso
    return true;
  } else {
    // Si no hay nada, lo mandamos al login y bloqueamos la entrada
    router.navigate(['/login']);
    return false;
  }
};