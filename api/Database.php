<?php
class Database {
    private static $instancia = null;
    private $conexion;

    private function __construct() {
        // Detectamos si estamos en LOCAL o en el SERVIDOR
        if ($_SERVER['SERVER_NAME'] == 'localhost' || $_SERVER['SERVER_ADDR'] == '127.0.0.1') {
            // Configuración LOCAL (XAMPP)
            $host = "localhost";
            $db   = "proyecto_crud";
            $user = "root";
            $pass = "root";
        } else {
            // Configuración HOSTINGER (Cambia estos datos por los de tu panel)
            $host = "localhost"; // Generalmente se queda igual en Hostinger
            $db   = "la base de dato"; 
            $user = "usuario de la base de dato";
            $pass = "contraseña";
        }

        try {
            $dsn = "mysql:host={$host};dbname={$db};charset=utf8mb4";
            $this->conexion = new PDO($dsn, $user, $pass);
            $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            die("Error de conexión: " . $e->getMessage());
        }
    }

    public static function obtenerInstancia() {
        if (self::$instancia == null) {
            self::$instancia = new Database();
        }
        return self::$instancia;
    }

    public function getConexion() {
        return $this->conexion;
    }
}