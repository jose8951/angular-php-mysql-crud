// Añadimos LOCALE_ID a la importación de @angular/core
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

// Importación de datos de localización para España
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

// Registro de los datos de idioma
registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    // Ahora LOCALE_ID ya no dará error porque está importado arriba
    { provide: LOCALE_ID, useValue: 'es-ES' }
  ]
};