<?php

require_once dirname(__DIR__) . '/vendor/autoload.php';

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

use App\Router;
use App\Controllers\ProductoController;
use App\Controllers\BeneficioController;
use App\Controllers\TrabajoHechoController;

$config = require dirname(__DIR__) . '/config/config.php';
$prefix = $config['api_prefix'];

$router = new Router($prefix);

$productoController = new ProductoController();
$beneficioController = new BeneficioController();
$trabajoController = new TrabajoHechoController();

// Productos
$router->get('/productos', fn() => $productoController->listar());
$router->get('/productos/{id}', fn($id) => $productoController->obtener($id));

// Beneficios (por producto)
$router->get('/productos/{id}/beneficios', fn($id) => $beneficioController->listarPorProducto($id));

// Trabajos hechos (Casos de éxito)
$router->get('/trabajos-hechos', fn() => $trabajoController->listar());
$router->get('/trabajos-hechos/{id}', fn($id) => $trabajoController->obtener($id));

$method = $_SERVER['REQUEST_METHOD'];
$uri = $_SERVER['REQUEST_URI'];

$router->dispatch($method, $uri);
