<?php

namespace App\Controllers;

use App\Database;
use PDO;

class TrabajoHechoController
{
    private PDO $db;

    public function __construct()
    {
        $this->db = Database::getConnection();
    }

    public function listar(): void
    {
        $stmt = $this->db->query("
            SELECT th.*, p.nombre as producto_nombre 
            FROM trabajos_hechos th 
            LEFT JOIN productos p ON th.producto_id = p.id 
            ORDER BY th.fecha_realizacion DESC
        ");
        $trabajos = $stmt->fetchAll();
        $this->json($trabajos);
    }

    public function obtener(int $id): void
    {
        $stmt = $this->db->prepare("
            SELECT th.*, p.nombre as producto_nombre, p.modelo as producto_modelo 
            FROM trabajos_hechos th 
            LEFT JOIN productos p ON th.producto_id = p.id 
            WHERE th.id = ?
        ");
        $stmt->execute([$id]);
        $trabajo = $stmt->fetch();
        if (!$trabajo) {
            $this->json(['error' => 'Trabajo no encontrado'], 404);
            return;
        }
        $this->json($trabajo);
    }

    private function json($data, int $code = 200): void
    {
        http_response_code($code);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
}
