-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-05-2021 a las 22:27:30
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `macrame_db`
--
CREATE DATABASE IF NOT EXISTS `macrame_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `macrame_db`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `categories`:
--

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Porta Macetas', '2021-05-14 00:43:46', '2021-05-14 00:43:46'),
(2, 'Almohadones', '2021-05-14 00:43:58', '2021-05-14 00:43:58'),
(3, 'Espejos', '2021-05-14 00:44:06', '2021-05-14 00:44:06'),
(4, 'Cortinas', '2021-05-14 00:44:12', '2021-05-14 00:44:12'),
(5, 'Adornos', '2021-05-14 00:44:24', '2021-05-14 00:44:24'),
(6, 'Bolsos y Carteras', '2021-05-14 00:44:33', '2021-05-14 00:44:33'),
(7, 'Accesorios', '2021-05-14 00:44:46', '2021-05-14 00:44:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

DROP TABLE IF EXISTS `colors`;
CREATE TABLE IF NOT EXISTS `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `colors`:
--

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'crudo', '2021-05-14 00:46:05', '2021-05-14 00:46:05'),
(2, 'negro', '2021-05-14 00:46:19', '2021-05-14 00:46:19'),
(3, 'verde', '2021-05-14 00:46:25', '2021-05-14 00:46:25'),
(4, 'beige', '2021-05-14 00:46:41', '2021-05-14 00:46:41'),
(5, 'marrón', '2021-05-14 00:46:46', '2021-05-14 00:46:46'),
(6, 'rosa', '2021-05-14 00:46:54', '2021-05-14 00:46:54'),
(7, 'gris', '2021-05-14 00:46:59', '2021-05-14 00:46:59'),
(8, 'rojo', '2021-05-14 00:47:04', '2021-05-14 00:47:04'),
(9, 'blanco', '2021-05-14 00:47:08', '2021-05-14 00:47:08');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `discount` decimal(10,0) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `colorId` int(11) DEFAULT NULL,
  `sizeId` int(11) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categoryId` (`categoryId`),
  KEY `colorId` (`colorId`,`sizeId`),
  KEY `sizeId` (`sizeId`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `products`:
--   `categoryId`
--       `categories` -> `id`
--   `sizeId`
--       `sizes` -> `id`
--   `colorId`
--       `colors` -> `id`
--

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `discount`, `stock`, `categoryId`, `description`, `colorId`, `sizeId`, `image`, `createdAt`, `updatedAt`) VALUES
(1, 'COLGADOR DE PLANTAS GRANDE. DECORACION MINIMALISTA MODERNA', '2310', '0', 1, 1, 'Está hecho de cable macramé de 1 cm, muy fuerte y resistente. la parte de borlas es generalmente alrededor de 5.9 pulgadas / 15 cm-7.87 pulgadas / 20 cm.', 4, 3, 'portamaceta1.jpg', '2021-05-14 00:57:45', '2021-05-14 00:57:45'),
(2, 'PORTA MACETA TEJIDO MACRAMÉ CRUDO CON BASE DE MADERA', '2600', '10', 1, 1, 'Porta maceta tejido de macramé para decoración de cocina boho o interiores, Con base de madera.diámetro 20cm (4,3 in) altura 90 cm (4 in).hecho con cuerda de algodón de 3 mm y anillo de madera', 1, 2, 'portamaceta2.png', '2021-05-14 00:58:51', '2021-05-14 00:58:51'),
(3, 'ALMOHADON DECORATIVO MACRAMÉ CRUDO. ESTILO BOHO', '2999', '15', 2, 2, 'Funda de almohada de lino de alta calidad: Estas fundas de almohada hechas de material de arpillera y borlas artesanal, transpirable, resistente a manchas y arrugas. Tamaño: Disponible en 2 tamaños: 18 x 18 (pulgadas)', 1, 2, 'almohadon1.jpg', '2021-05-14 01:00:20', '2021-05-14 01:00:20'),
(4, 'ALMOHADON CUBIERTO EN MACRAMÉ. DECORACION MODERNA', '2420', '10', 1, 2, 'Esta hermosa funda de cojín de macramé es 100% hecha a mano y 100% hilo de algodón. Cosido en la cubierta del cojín de algodón. Macrame es un solo lado.Materiales: Material de la funda: Algodón, Lana Material de relleno: Algodón, Poliéster. Largo: 45 centímetros. Ancho: 45 centímetros', 5, 2, 'almohadon2.jpg', '2021-05-14 01:01:35', '2021-05-14 01:01:35'),
(5, 'ALMOHADON DECORATIVO MACRAMÉ NEGRO', '2420', '10', 1, 2, 'Esta hermosa funda de cojín de macramé es 100% hecha a mano y 100% hilo de algodón. Cosido en la cubierta del cojín de algodón. Macrame es un solo lado.Materiales: Material de la funda: Algodón, Lana; Material de relleno: Algodón, Poliéster. Largo: 45 centímetros. Ancho: 45 centímetros', 2, 1, 'almohadon3.jpg', '2021-05-14 01:09:05', '2021-05-14 01:09:05'),
(6, 'ALMOHADON RÚSTICO- BOHEMIO CHIC', '1999', '10', 1, 2, 'Esta hermosa funda de cojín de macramé es 100% hecha a mano y 100% hilo de algodón. Cosido en la cubierta del cojín de algodón. Macrame es un solo lado.Materiales: Material de la funda: Algodón, Lana; Material de relleno: Algodón, Poliéster. Largo: 45 centímetros. Ancho: 45 centímetros', 4, 2, 'almohadon4.jpg', '2021-05-14 01:10:12', '2021-05-14 01:10:12'),
(7, 'ESPEJO DE PARED REDONDO ESTILO BOHO', '3638', '10', 1, 3, 'El espejo macrame está hecho a mano y tiene un bucle para colgarlo en la pared. La superficie del espejo tiene un diámetro de 20 cm o 40 cm y el macrame tiene un diámetro total de 32 cm o 52 cm. El hilo de macrame está hecho de 100% algodón y es beige. El espejo tiene un dispositivo colgante adicional de tamaño 52 cm en la parte posterior. Envío: El espejo está envuelto de forma segura en envoltura de burbujas reciclables y el paquete está acolchado con papel desde el interior.', 4, 2, 'espejo4.jpg', '2021-05-14 01:11:14', '2021-05-14 01:11:14'),
(8, 'ESPEJO DE PARED REDONDO ESTILO MANDALA', '4280', '15', 1, 3, 'Espejo mandala hecho a mano. Está hecho con cordones de algodón 100% reciclados y aro de metal en él. Cordón de algodón blanco natural. Medidas: espejo redondo de 40cm y diametro total 60cm', 3, 2, 'espejo2.jpg', '2021-05-14 01:12:11', '2021-05-14 01:12:11'),
(9, 'ESPEJO DE PARED REDONDO FLECOS ESTILO BOHO', '3638', '10', 1, 3, 'El espejo macrame está hecho a mano y tiene un bucle para colgarlo en la pared. La superficie del espejo tiene un diámetro de 20 cm o 40 cm y el macrame tiene un diámetro total de 32 cm o 52 cm. El hilo de macrame está hecho de 100% algodón y es beige. El espejo tiene un dispositivo colgante adicional de tamaño 52 cm en la parte posterior. Envío: El espejo está envuelto de forma segura en envoltura de burbujas reciclables y el paquete está acolchado con papel desde el interior.', 1, 2, 'espejo1.jpg', '2021-05-14 01:19:12', '2021-05-14 01:19:12'),
(10, 'PANELES DE CORTINA ESTRELLA NEGRA', '17242', '20', 1, 4, 'Una cortina negra de cuentas de puerta de macramé con un gran patrón de flores en la parte superior transformará cualquier interior del hogar de una manera muy inusual. Los elementos son muy grandes y expresivos. El panel de mimbre está diseñado para centrarse en la abertura en la que colgará. Las bisagras en la parte superior de la cortina están hechas en la técnica del macramé y le permiten colgarlo fácil y convenientemente como desee en la abertura. Material cordon de algodon. Las dimensiones de este producto son: altura 82,6 pulgadas (210 centímetros) o 110 pulgadas (280 centímetros) ancho 45 pulgadas (110 centímetros)', 2, 3, 'cortina1.jpg', '2021-05-14 01:20:17', '2021-05-14 01:20:17'),
(11, 'CORTINA EN MACRAMÉ DECORACION GEOMETRICA', '9030', '15', 1, 4, 'Este gran panel de cortina es una manera perfecta de trabajar piezas vintage en una decoración moderna del hogar, simplemente añadiendo este Tapiz trae un ambiente tribal instantáneo, azteca y Boho a cualquier habitación. Cordon 100% de primera clase de algodón de 4 mm Tamaño: 78cm L X 30cm W', 4, 3, 'cortina2.jpg', '2021-05-14 01:21:22', '2021-05-14 01:21:22'),
(12, 'ADORNO COLGANTE DE PARED BOHO-CHIC', '2989', '10', 1, 5, 'Está hecho de cordón de algodón trenzado de calidad blanco/beige natural de 5 mm, y está colgado en una hermosa rama de madera a la deriva.DIMENSIONES:- Ancho del macramé: 74 cm - Altura del macramé: 89,5 cm - longitud del espiga: 87 cm', 1, 2, 'adorno1.jpg', '2021-05-14 01:22:31', '2021-05-14 01:22:31'),
(13, 'COLGANTE DE PLUMAS BOHO-CHIC', '1840', '10', 1, 5, 'Macrame pared colgante pluma Boho Chic hoja tejida borlas decoración ornamentos de algodón.100% Algodón+Madera Natural.Tamaño: 95cm * 45cm', 7, 2, 'adorno2.jpg', '2021-05-14 01:23:47', '2021-05-14 01:23:47'),
(14, 'MACRAMÉ PARED DECORACION BOHO COLGANDO PLUMAS', '2570', '10', 1, 5, 'Estas son plumas colgantes de pared macramé en el estilo boho. 100% algodón. Las plumas están fijadas en palos de canela. Además, se puede comprar un conjunto de 3 plumas.Longitud : 8 6/8\'\' (22 cm)Ancho : 4 3/4\'\' (12 cm)', 1, 2, 'adorno3.jpg', '2021-05-14 01:24:43', '2021-05-14 01:24:43'),
(15, 'MACRAMÉ GRANDE- COLGANTE DE PARED PLUMAS', '3840', '15', 1, 5, 'Macrame pared colgante pluma Boho Chic hoja tejida borlas decoración ornamentos de algodón.100% Algodón Madera Natural.Tamaño: 170cm * 75cm', 3, 3, 'adorno4.jpg', '2021-05-14 01:25:44', '2021-05-14 01:25:44'),
(16, 'BOLSO DE MACRAMÉ', '2824', '10', 1, 6, 'Bolso macramé. Bolso de cuerda de diseño artesanal. Bolso con tiras de diseño de cuerda natural y algodón', 9, 1, 'bolso1.jpg', '2021-05-14 01:26:49', '2021-05-14 01:26:49'),
(17, 'CARTERA CRUZADA DE VERANO BOHO-CHIC', '3638', '10', 1, 6, 'Bolso de hombro de macramé de cuerda de algodón.Diseño con el interior con cremallera, fácil de llevar cosas pequeñas. La cuerda de algodón hueco que hace el peso de la bolsa sea más ligero.  Hermosas borlas son perfectas para todas partes.', 5, 2, 'bolso2.jpg', '2021-05-14 01:27:43', '2021-05-14 01:27:43'),
(18, 'AROS MICRO MACRAME BOHO-CHIC', '2675', '10', 1, 7, 'La joyería Macrame es famosa por ser muy duradera y duradera Piedra preciosa: Amatista longitud: 7cm / 2.75\'\' sin el gancho cuentas genuinas de Amatista de Brasil muy ligero y cómodo de llevar!', 5, 1, 'aros1.jpg', '2021-05-14 01:28:49', '2021-05-14 01:28:49'),
(19, 'PULSERA LADYBUG DE LA SUERTE', '1900', '0', 1, 7, 'Ancho de la pulsera: 4 Milímetros Materiales: Cordón rojo, Conector metálico Cierre: Atado Ajustable Estilo: Minimalista  Pulsera roja se hace utilizando la técnica Macrame. Un encanto lindo en forma de trébol.', 8, 1, 'pulsera1.jpg', '2021-05-14 01:29:56', '2021-05-14 01:29:56'),
(20, 'COLLAR MICRO MACRAMÉ CON CUARZO ROSA Y TURQUESA', '11540', '0', 1, 7, 'Largo del collar: 60 Centímetros Piedra preciosa: Cuarzo rosa Largo ajustable. Collar hecho con la técnica de micro macramé, con dos piedras hermosas, un cuarzo rosa y un turquesa; Collar cuidadosamente elaborado, la cintura es ajustable por un nudo deslizante. Pieza única y original', 5, 2, 'collar1.jpg', '2021-05-14 01:30:59', '2021-05-14 01:30:59'),
(21, 'COLLAR MICRO MACRAMÉ CON PIEDRAS HERMOSAS. BOHO-CHIC', '10540', '20', 1, 7, 'Largo del collar: 60 Centímetros Piedra preciosa: Cuarzo rosa Largo ajustable. Collar hecho con la técnica de micro macramé, con dos piedras hermosas amatista. Collar cuidadosamente elaborado, la cintura es ajustable por un nudo deslizante. Pieza única y original', 2, 2, 'collar2.jpg', '2021-05-14 01:32:56', '2021-05-14 01:32:56');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

DROP TABLE IF EXISTS `sequelizemeta`;
CREATE TABLE IF NOT EXISTS `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- RELACIONES PARA LA TABLA `sequelizemeta`:
--

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20210514032628-create-products.js'),
('20210514032924-create-users.js'),
('20210514033004-create-categories.js'),
('20210514033028-create-colors.js'),
('20210514033058-create-sizes.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

DROP TABLE IF EXISTS `sizes`;
CREATE TABLE IF NOT EXISTS `sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `sizes`:
--

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'pequeño', '2021-05-14 00:47:23', '2021-05-14 00:47:23'),
(2, 'mediano', '2021-05-14 00:47:27', '2021-05-14 00:47:27'),
(3, 'grande', '2021-05-14 00:47:32', '2021-05-14 00:47:32');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `userName` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `users`:
--

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `userName`, `email`, `avatar`, `password`, `createdAt`, `updatedAt`) VALUES
(3, 'Layla Rodas', 'Layla', 'rodas.layla@gmail.com', '1621022487232_img.jpg', '$2a$10$69RjSbVTjC9U2EMQsszzXOLeedDUW6V1zV6YDKEmSSJH8FnDXvflG', '2021-05-14 20:01:27', '2021-05-14 20:01:27');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`colorId`) REFERENCES `colors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
