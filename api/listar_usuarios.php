<?php
// 1. Incluimos tus archivos de configuración
require_once 'cors.php'; 
require_once 'Database.php';

try {
    // 2. Obtenemos la conexión desde tu clase Singleton
    $db = Database::obtenerInstancia()->getConexion();
    
    // 3. Preparamos la consulta. 
    // He incluido los 5 campos que vimos en tu tabla usuarios_sistema.
    $query = "SELECT id, nombre_completo, email, rol, creado_en FROM usuarios_sistema ORDER BY id DESC";
    
    $stmt = $db->prepare($query);
    $stmt->execute();
    
    // 4. Obtenemos todos los registros como un array asociativo
    $usuarios = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // 5. Enviamos el resultado a Angular en formato JSON
    echo json_encode($usuarios);

} catch (PDOException $e) {
    // En caso de error, avisamos qué pasó
    echo json_encode([
        "success" => false, 
        "mensaje" => "Error al leer la base de datos: " . $e->getMessage()
    ]);
}
?>