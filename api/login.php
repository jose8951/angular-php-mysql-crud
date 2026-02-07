<?php
require_once 'cors.php';
require_once 'Database.php';

// Recibir datos de Angular
$json = file_get_contents('php://input');
$datos = json_decode($json);

if (!$datos) {
    echo json_encode(["success" => false, "mensaje" => "No se enviaron datos"]);
    exit;
}

$email = $datos->email;
$pass = $datos->password;

try {
    $db = Database::obtenerInstancia()->getConexion();
    
    // Consulta segura con PDO
    $stmt = $db->prepare("SELECT id, nombre_completo, password FROM usuarios_sistema WHERE email = :email LIMIT 1");
    $stmt->bindParam(':email', $email);
    $stmt->execute();
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    // Verificación (admin123 es el que pusimos en el SQL)
    if ($usuario && password_verify($pass, $usuario['password'])) {
        echo json_encode([
            "success" => true,
            "mensaje" => "Bienvenido " . $usuario['nombre_completo'],
            "usuario" => [
                "id" => $usuario['id'],
                "nombre" => $usuario['nombre_completo']
            ]
        ]);
    } else {
        echo json_encode(["success" => false, "mensaje" => "Correo o contraseña incorrectos"]);
    }

} catch (Exception $e) {
    echo json_encode(["success" => false, "mensaje" => "Error: " . $e->getMessage()]);
}