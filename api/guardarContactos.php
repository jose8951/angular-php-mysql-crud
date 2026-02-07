<?php
require_once 'cors.php';
require_once 'Database.php';

$json = file_get_contents('php://input');
$datos = json_decode($json);

if (!$datos) exit;

try {
    $db = Database::obtenerInstancia()->getConexion();

    if (isset($datos->id) && $datos->id > 0) {
        // MODO EDICIÓN
        $sql = "UPDATE contactos SET nombre=:nom, puesto=:pue, departamento=:dep, 
                telefono=:tel, email=:ema, estado=:est WHERE id=:id";
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':id', $datos->id);
    } else {
        // MODO INSERCIÓN
        $sql = "INSERT INTO contactos (nombre, puesto, departamento, telefono, email, estado) 
                VALUES (:nom, :pue, :dep, :tel, :ema, :est)";
        $stmt = $db->prepare($sql);
    }

    $stmt->bindParam(':nom', $datos->nombre);
    $stmt->bindParam(':pue', $datos->puesto);
    $stmt->bindParam(':dep', $datos->departamento);
    $stmt->bindParam(':tel', $datos->telefono);
    $stmt->bindParam(':ema', $datos->email);
    $stmt->bindParam(':est', $datos->estado);

    if ($stmt->execute()) {
        echo json_encode(["success" => true, "mensaje" => "Operación exitosa"]);
    } else {
        echo json_encode(["success" => false, "mensaje" => "Error al ejecutar"]);
    }

} catch (PDOException $e) {
    echo json_encode(["success" => false, "mensaje" => $e->getMessage()]);
}