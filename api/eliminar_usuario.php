<?php
// 1. Incluimos tus cabeceras y la conexión
require_once 'cors.php'; 
require_once 'Database.php';

// 2. Obtenemos el ID desde la URL (ejemplo: eliminar_usuario.php?id=5)
$id = isset($_GET['id']) ? $_GET['id'] : null;

if ($id) {
    $db = Database::obtenerInstancia()->getConexion();

    try {
        // 3. Preparamos la consulta de eliminación
        // IMPORTANTE: Siempre usar WHERE con el ID para no borrar toda la tabla
        $sql = "DELETE FROM usuarios_sistema WHERE id = :id";
        
        $stmt = $db->prepare($sql);
        $stmt->bindParam(':id', $id);

        if ($stmt->execute()) {
            // 4. Respondemos a Angular que todo salió bien
            echo json_encode([
                "success" => true,
                "mensaje" => "Usuario con ID " . $id . " eliminado correctamente"
            ]);
        } else {
            echo json_encode([
                "success" => false,
                "mensaje" => "No se pudo realizar la eliminación"
            ]);
        }

    } catch (PDOException $e) {
        echo json_encode([
            "success" => false,
            "mensaje" => "Error de base de datos: " . $e->getMessage()
        ]);
    }
} else {
    // Si no recibimos el ID, avisamos del error
    echo json_encode([
        "success" => false,
        "mensaje" => "No se proporcionó un ID válido"
    ]);
}
?>