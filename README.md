# CrudAngularPhp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.0.3.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# CRUD Full Stack: Angular + PHP + MySQL

Este es un proyecto completo de gestión (CRUD) que utiliza **Angular** para la interfaz de usuario, **PHP** como API REST y **MySQL** para el almacenamiento de datos.

## 🚀 Arquitectura del Proyecto
El proyecto está desplegado de forma híbrida para maximizar el rendimiento:
* **Frontend:** Desplegado en **Render** (Static Site).
* **Backend y Base de Datos:** Alojados en **Hostinger**.

## 📁 Estructura de Carpetas
* `/src`: Código fuente de la aplicación Angular.
* `/api`: Scripts de PHP que gestionan la lógica del servidor y conexión a DB.
* `/database`: Contiene el archivo `.sql` para la creación de las tablas en MySQL.

## 🛠️ Tecnologías Utilizadas
* **Angular 18+**: Framework para el desarrollo del frontend.
* **PHP**: Lenguaje de servidor para la API REST.
* **MySQL**: Sistema de gestión de base de datos relacional.
* **Bootstrap**: Framework CSS para el diseño responsivo.

## ⚙️ Configuración del Despliegue

### En Render (Frontend)
1. **Build Command:** `npm install && npm run build`.
2. **Publish Directory:** `dist/crud-angular-php/browser`.
3. **Redirects:** Se ha configurado una regla de *Rewrite* de `/*` a `/index.html` para soportar las rutas de Angular.

### En Hostinger (Backend)
1. Importar el script de `/database` en phpMyAdmin.
2. Configurar las cabeceras **CORS** en los archivos de la carpeta `/api` para permitir peticiones desde el dominio de Render.

## 🔑 Seguridad
El acceso al repositorio se gestiona mediante **GitHub Personal Access Tokens** para un despliegue seguro desde el entorno local.
