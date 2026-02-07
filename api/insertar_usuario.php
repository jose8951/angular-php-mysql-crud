<?php
require_once 'cors.php';
require_once 'Database.php';

$json = file_get_contents('php://input');
$data = json_decode($json, true);

if (!$data) {
    echo json_encode(["success" => false, "mensaje" => "No hay datos"]);
    exit;
}

try {
    $db = Database::obtenerInstancia()->getConexion();
    
    $nombre = trim($data['nombre_completo']);
    $email = trim($data['email']);
    $pass = password_hash($data['password'], PASSWORD_BCRYPT);
    
    // REPARACIÓN: Usamos directamente el valor que viene de Angular
    // trim() quita espacios y lo dejamos tal cual viene
    $rol = trim($data['rol']); 

    $sql = "INSERT INTO usuarios_sistema (nombre_completo, email, password, rol) 
            VALUES (:nom, :ema, :pas, :rol)";
    
    $stmt = $db->prepare($sql);
    $resultado = $stmt->execute([
        ':nom' => $nombre,
        ':ema' => $email,
        ':pas' => $pass,
        ':rol' => $rol
    ]);

    echo json_encode(["success" => true, "mensaje" => "Usuario creado"]);

} catch (PDOException $e) {
    echo json_encode([
        "success" => false, 
        "mensaje" => "Error de base de datos: " . $e->getMessage()
    ]);
}
?>