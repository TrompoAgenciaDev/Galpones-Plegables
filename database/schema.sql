-- Base de datos: Galpones Plegables
-- MariaDB

CREATE DATABASE IF NOT EXISTS galpones_plegables;
USE galpones_plegables;

-- Tabla: productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    modelo VARCHAR(100),
    medidas_frente DECIMAL(10,2) COMMENT 'En metros',
    medidas_altura_util DECIMAL(10,2) COMMENT 'En metros',
    medidas_profundidad DECIMAL(10,2) COMMENT 'En metros',
    medidas_superficie DECIMAL(10,2) COMMENT 'En m²',
    estructura VARCHAR(255),
    cubierta VARCHAR(255),
    cerramientos_laterales VARCHAR(255),
    tiempo_instalacion VARCHAR(100),
    tipo_uso VARCHAR(255),
    ficha_url VARCHAR(500) COMMENT 'URL del PDF de la ficha técnica',
    descripcion TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla: beneficios (relación 1:N con productos)
-- Un producto tiene muchos beneficios
CREATE TABLE beneficios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    icono_svg TEXT COMMENT 'Contenido SVG o ruta al ícono',
    descripcion TEXT,
    orden INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE,
    INDEX idx_producto (producto_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Tabla: trabajos_hechos (Casos de Éxito)
CREATE TABLE trabajos_hechos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT,
    imagen_url VARCHAR(500),
    fecha_realizacion DATE,
    cliente VARCHAR(255),
    ubicacion VARCHAR(255),
    producto_id INT NULL COMMENT 'Producto asociado si aplica',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE SET NULL,
    INDEX idx_producto (producto_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
