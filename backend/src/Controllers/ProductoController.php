<?php

namespace App\Controllers;

use App\Database;
use PDO;

class ProductoController
{
    private PDO $db;

    public function __construct()
    {
        $this->db = Database::getConnection();
    }

    public function listar(): void
    {
        $stmt = $this->db->query("SELECT * FROM productos ORDER BY nombre");
        $productos = $stmt->fetchAll();
        $this->json($productos);
    }

    public function obtener(int $id): void
    {
        $stmt = $this->db->prepare("SELECT * FROM productos WHERE id = ?");
        $stmt->execute([$id]);
        $producto = $stmt->fetch();
        if (!$producto) {
            $this->json(['error' => 'Producto no encontrado'], 404);
            return;
        }
        // Incluir beneficios
        $stmtBen = $this->db->prepare("SELECT * FROM beneficios WHERE producto_id = ? ORDER BY orden");
        $stmtBen->execute([$id]);
        $producto['beneficios'] = $stmtBen->fetchAll();
        $this->json($producto);
    }

    private function json($data, int $code = 200): void
    {
        http_response_code($code);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($data, JSON_UNESCAPED_UNICODE);
    }
}
