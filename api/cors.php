<?php
// Permitir cualquier origen (Angular suele correr en el puerto 4200)
header("Access-Control-Allow-Origin: *");

// Permitir los métodos que usaremos en nuestro CRUD
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// Permitir los encabezados que Angular envía por defecto
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// Indicar que la respuesta siempre será un JSON
header("Content-Type: application/json; charset=UTF-8");

// Manejar las peticiones tipo OPTIONS (Preflight) que hace el navegador automáticamente
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
?>