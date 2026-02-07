<?php
require_once 'cors.php';
require_once 'Database.php';

$json = file_get_contents('php://input');
$datos = json_decode($json);

// Aquí la validación es más estricta: ¡Necesitamos el ID!
if (!$datos || !isset($datos->id)) {
    echo json_encode(["success" => false, "mensaje" => "ID no proporcionado"]);
    exit;
}

try {
    $db = Database::obtenerInstancia()->getConexion();

    // SQL de actualización con la cláusula WHERE
    $sql = "UPDATE usuarios_sistema SET 
            nombre_completo = :nom, 
            email = :ema, 
            password = :pas, 
            rol = :rol 
            WHERE id = :id";
    
    $stmt = $db->prepare($sql);

    // Vinculamos los datos + el ID para saber a quién modificar
    $stmt->bindParam(':id', $datos->id);
    $stmt->bindParam(':nom', $datos->nombre_completo);
    $stmt->bindParam(':ema', $datos->email);
    $stmt->bindParam(':pas', $datos->password);
    $stmt->bindParam(':rol', $datos->rol);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "mensaje" => "¡Usuario actualizado correctamente!"]);
    }

} catch (PDOException $e) {
    echo json_encode(["success" => false, "mensaje" => $e->getMessage()]);
}
?>