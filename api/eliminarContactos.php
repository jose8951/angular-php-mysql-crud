<?php
require_once 'cors.php';
require_once 'Database.php';

$id = $_GET['id'] ?? null;

if (!$id) exit;

try {
    $db = Database::obtenerInstancia()->getConexion();
    $sql = "DELETE FROM contactos WHERE id = :id";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':id', $id);
    
    echo json_encode(["success" => $stmt->execute()]);
} catch (PDOException $e) {
    echo json_encode(["success" => false, "mensaje" => $e->getMessage()]);
}