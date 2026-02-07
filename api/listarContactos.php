<?php
require_once 'cors.php';
require_once 'Database.php';

try {
    $db = Database::obtenerInstancia()->getConexion();
    
    // Consultamos todos los contactos de la tabla que creamos en Workbench
    $query = "SELECT * FROM contactos ORDER BY id DESC";
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    $contactos = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Devolvemos los datos en formato JSON para Angular
    echo json_encode($contactos);

} catch (PDOException $e) {
    echo json_encode(["error" => $e->getMessage()]);
}
?>