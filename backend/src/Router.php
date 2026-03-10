<?php

namespace App;

class Router
{
    private array $routes = [];
    private string $prefix = '';

    public function __construct(string $prefix = '')
    {
        $this->prefix = rtrim($prefix, '/');
    }

    public function get(string $path, callable $handler): self
    {
        return $this->addRoute('GET', $path, $handler);
    }

    public function post(string $path, callable $handler): self
    {
        return $this->addRoute('POST', $path, $handler);
    }

    public function put(string $path, callable $handler): self
    {
        return $this->addRoute('PUT', $path, $handler);
    }

    public function delete(string $path, callable $handler): self
    {
        return $this->addRoute('DELETE', $path, $handler);
    }

    private function addRoute(string $method, string $path, callable $handler): self
    {
        $path = $this->prefix . '/' . ltrim($path, '/');
        $this->routes[] = [
            'method' => $method,
            'path' => $path,
            'handler' => $handler,
        ];
        return $this;
    }

    public function dispatch(string $method, string $uri): void
    {
        $requestUri = parse_url($uri, PHP_URL_PATH);
        $requestUri = rtrim($requestUri ?: '/', '/') ?: '/';

        foreach ($this->routes as $route) {
            if ($route['method'] !== $method) {
                continue;
            }
            $params = $this->matchRoute($route['path'], $requestUri);
            if ($params !== null) {
                call_user_func_array($route['handler'], $params);
                return;
            }
        }

        http_response_code(404);
        header('Content-Type: application/json');
        echo json_encode(['error' => 'Ruta no encontrada']);
    }

    private function matchRoute(string $pattern, string $uri): ?array
    {
        $regex = preg_replace('/\{(\w+)\}/', '([^/]+)', $pattern);
        $regex = '#^' . $regex . '$#';
        if (preg_match($regex, $uri, $matches)) {
            array_shift($matches);
            return array_map('intval', $matches);
        }
        return null;
    }
}
