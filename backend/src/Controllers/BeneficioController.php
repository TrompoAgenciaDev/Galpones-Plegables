<?php

namespace App\Controllers;

use App\Database;
use PDO;

class BeneficioController
{
    private PDO $db;

    public function __construct()
    {
        $this->db = Database::getConnection();
    }

    public function listarPorProducto(int $productoId): void
    {
        $stmt = $this->db->prepare("SELECT * FROM beneficios WHERE producto_id = ? ORDER BY orden");
        $stmt->execute([$productoId]);
        $beneficios = $stmt->fetchAll();
        $this->json($beneficios);
    }

    private function json($data, int $code = 200): void
    {
        http_response_code($code);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
}
