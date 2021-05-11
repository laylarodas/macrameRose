-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-05-2021 a las 19:56:07
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
-- Base de datos: `store`
--
CREATE DATABASE IF NOT EXISTS `store` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `store`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `categories`:
--

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Porta Macetas'),
(2, 'Almohadones'),
(3, 'Espejos'),
(4, 'Cortinas'),
(5, 'Adornos'),
(6, 'Bolsos y Carteras'),
(7, 'Accesorios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

DROP TABLE IF EXISTS `colors`;
CREATE TABLE IF NOT EXISTS `colors` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `colors`:
--

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`id`, `name`) VALUES
(1, 'crudo'),
(2, 'negro'),
(3, 'verde'),
(4, 'beige'),
(5, 'marrón'),
(6, 'rosa'),
(7, 'gris'),
(8, 'rojo'),
(9, 'blanco');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `image` varchar(100) NOT NULL,
  `description` longtext NOT NULL,
  `categoryId` int(11) NOT NULL,
  `colorId` int(11) NOT NULL,
  `sizeId` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `discount` decimal(10,0) NOT NULL,
  `stock` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_colors_idx` (`colorId`),
  KEY `fk_products_sizes_idx` (`sizeId`),
  KEY `fk_products_categories_idx` (`categoryId`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `products`:
--   `categoryId`
--       `categories` -> `id`
--   `colorId`
--       `colors` -> `id`
--   `sizeId`
--       `sizes` -> `id`
--

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `description`, `categoryId`, `colorId`, `sizeId`, `price`, `discount`, `stock`) VALUES
(1, 'COLGADOR DE PLANTAS GRANDE. DECORACION MINIMALISTA MODERNA', 'portamaceta1.jpg', 'Está hecho de cable macramé de 1 cm, muy fuerte y resistente. la parte de borlas es generalmente alrededor de 5.9 pulgadas / 15 cm-7.87 pulgadas / 20 cm.', 1, 4, 3, '2310', '0', 1),
(2, 'PORTA MACETA TEJIDO MACRAMÉ CRUDO CON BASE DE MADERA', 'portamaceta2.png', 'Porta maceta tejido de macramé para decoración de cocina boho o interiores, Con base de madera.diámetro 20cm (4,3 in) altura 90 cm (4 in).hecho con cuerda de algodón de 3 mm y anillo de madera', 1, 1, 2, '2600', '10', 1),
(3, 'ALMOHADON DECORATIVO MACRAMÉ CRUDO. ESTILO BOHO', 'almohadon1.jpg', 'Funda de almohada de lino de alta calidad: Estas fundas de almohada hechas de material de arpillera y borlas artesanal, transpirable, resistente a manchas y arrugas. Tamaño: Disponible en 2 tamaños: 18 x 18 (pulgadas)', 2, 1, 2, '2999', '15', 1),
(4, 'ALMOHADON CUBIERTO EN MACRAMÉ. DECORACION MODERNA', 'almohadon2.jpg', 'Esta hermosa funda de cojín de macramé es 100% hecha a mano y 100% hilo de algodón. Cosido en la cubierta del cojín de algodón. Macrame es un solo lado.Materiales: Material de la funda: Algodón, Lana Material de relleno: Algodón, Poliéster. Largo: 45 centímetros. Ancho: 45 centímetros', 2, 5, 2, '2420', '10', 1),
(5, 'ALMOHADON DECORATIVO MACRAMÉ NEGRO', 'almohadon3.jpg', 'Esta hermosa funda de cojín de macramé es 100% hecha a mano y 100% hilo de algodón. Cosido en la cubierta del cojín de algodón. Macrame es un solo lado.Materiales: Material de la funda: Algodón, Lana; Material de relleno: Algodón, Poliéster. Largo: 45 centímetros. Ancho: 45 centímetros', 2, 2, 1, '2450', '10', 1),
(6, 'ALMOHADON RÚSTICO- BOHEMIO CHIC', 'almohadon4.jpg', 'Esta hermosa funda de cojín de macramé es 100% hecha a mano y 100% hilo de algodón. Cosido en la cubierta del cojín de algodón. Macrame es un solo lado.Materiales: Material de la funda: Algodón, Lana; Material de relleno: Algodón, Poliéster. Largo: 45 centímetros. Ancho: 45 centímetros', 2, 4, 2, '1999', '10', 1),
(7, 'ESPEJO DE PARED REDONDO ESTILO BOHO', 'espejo4.jpg', 'El espejo macrame está hecho a mano y tiene un bucle para colgarlo en la pared. La superficie del espejo tiene un diámetro de 20 cm o 40 cm y el macrame tiene un diámetro total de 32 cm o 52 cm. El hilo de macrame está hecho de 100% algodón y es beige. El espejo tiene un dispositivo colgante adicional de tamaño 52 cm en la parte posterior. Envío: El espejo está envuelto de forma segura en envoltura de burbujas reciclables y el paquete está acolchado con papel desde el interior.', 3, 4, 2, '3638', '10', 1),
(8, 'ESPEJO DE PARED REDONDO ESTILO MANDALA', 'espejo2.jpg', 'Espejo mandala hecho a mano. Está hecho con cordones de algodón 100% reciclados y aro de metal en él. Cordón de algodón blanco natural. Medidas: espejo redondo de 40cm y diametro total 60cm', 3, 3, 2, '4280', '15', 1),
(9, 'ESPEJO DE PARED REDONDO FLECOS ESTILO BOHO', 'espejo1.jpg', 'El espejo macrame está hecho a mano y tiene un bucle para colgarlo en la pared. La superficie del espejo tiene un diámetro de 20 cm o 40 cm y el macrame tiene un diámetro total de 32 cm o 52 cm. El hilo de macrame está hecho de 100% algodón y es beige. El espejo tiene un dispositivo colgante adicional de tamaño 52 cm en la parte posterior. Envío: El espejo está envuelto de forma segura en envoltura de burbujas reciclables y el paquete está acolchado con papel desde el interior.', 3, 1, 2, '3638', '10', 1),
(10, 'PANELES DE CORTINA ESTRELLA NEGRA', 'cortina1.jpg', 'Una cortina negra de cuentas de puerta de macramé con un gran patrón de flores en la parte superior transformará cualquier interior del hogar de una manera muy inusual. Los elementos son muy grandes y expresivos. El panel de mimbre está diseñado para centrarse en la abertura en la que colgará. Las bisagras en la parte superior de la cortina están hechas en la técnica del macramé y le permiten colgarlo fácil y convenientemente como desee en la abertura. Material cordon de algodon. Las dimensiones de este producto son: altura 82,6 pulgadas (210 centímetros) o 110 pulgadas (280 centímetros) ancho 45 pulgadas (110 centímetros)', 4, 2, 3, '17242', '20', 1),
(11, 'CORTINA EN MACRAMÉ DECORACION GEOMETRICA', 'cortina2.jpg', 'Este gran panel de cortina es una manera perfecta de trabajar piezas vintage en una decoración moderna del hogar, simplemente añadiendo este Tapiz trae un ambiente tribal instantáneo, azteca y Boho a cualquier habitación. Cordon 100% de primera clase de algodón de 4 mm Tamaño: 78cm L X 30cm W', 4, 4, 3, '9030', '15', 1),
(12, 'ADORNO COLGANTE DE PARED BOHO-CHIC', 'adorno1.jpg', 'Está hecho de cordón de algodón trenzado de calidad blanco/beige natural de 5 mm, y está colgado en una hermosa rama de madera a la deriva.DIMENSIONES:- Ancho del macramé: 74 cm - Altura del macramé: 89,5 cm - longitud del espiga: 87 cm', 5, 1, 2, '2989', '10', 1),
(13, 'COLGANTE DE PLUMAS BOHO-CHIC', 'adorno2.jpg', 'Macrame pared colgante pluma Boho Chic hoja tejida borlas decoración ornamentos de algodón.100% Algodón+Madera Natural.Tamaño: 95cm * 45cm', 5, 7, 2, '1840', '0', 1),
(14, 'MACRAMÉ PARED DECORACION BOHO COLGANDO PLUMAS', 'adorno3.jpg', 'Estas son plumas colgantes de pared macramé en el estilo boho. 100% algodón. Las plumas están fijadas en palos de canela. Además, se puede comprar un conjunto de 3 plumas.Longitud : 8 6/8\'\' (22 cm)Ancho : 4 3/4\'\' (12 cm)', 5, 1, 2, '2570', '10', 1),
(15, 'MACRAMÉ GRANDE- COLGANTE DE PARED PLUMAS', 'adorno4.jpg', 'Macrame pared colgante pluma Boho Chic hoja tejida borlas decoración ornamentos de algodón.100% Algodón Madera Natural.Tamaño: 170cm * 75cm', 5, 4, 3, '3840', '15', 1),
(16, 'BOLSO DE MACRAMÉ', 'bolso1.jpg', 'Bolso macramé. Bolso de cuerda de diseño artesanal. Bolso con tiras de diseño de cuerda natural y algodón', 6, 9, 1, '2824', '10', 1),
(17, 'CARTERA CRUZADA DE VERANO BOHO-CHIC', 'bolso2.jpg', 'Bolso de hombro de macramé de cuerda de algodón.Diseño con el interior con cremallera, fácil de llevar cosas pequeñas. La cuerda de algodón hueco que hace el peso de la bolsa sea más ligero.  Hermosas borlas son perfectas para todas partes.', 6, 5, 2, '3638', '10', 1),
(18, 'AROS MICRO MACRAME BOHO-CHIC', 'aros1.jpg', 'La joyería Macrame es famosa por ser muy duradera y duradera Piedra preciosa: Amatista longitud: 7cm / 2.75\'\' sin el gancho cuentas genuinas de Amatista de Brasil muy ligero y cómodo de llevar!', 7, 5, 1, '2675', '10', 1),
(19, 'PULSERA LADYBUG DE LA SUERTE', 'pulsera1.jpg', 'Ancho de la pulsera: 4 Milímetros Materiales: Cordón rojo, Conector metálico Cierre: Atado Ajustable Estilo: Minimalista  Pulsera roja se hace utilizando la técnica Macrame. Un encanto lindo en forma de trébol.', 7, 8, 1, '1900', '0', 1),
(20, 'COLLAR MICRO MACRAMÉ CON CUARZO ROSA Y TURQUESA', 'collar1.jpg', 'Largo del collar: 60 Centímetros Piedra preciosa: Cuarzo rosa Largo ajustable. Collar hecho con la técnica de micro macramé, con dos piedras hermosas, un cuarzo rosa y un turquesa; Collar cuidadosamente elaborado, la cintura es ajustable por un nudo deslizante. Pieza única y original', 7, 5, 2, '11540', '0', 1),
(21, 'COLLAR MICRO MACRAMÉ CON PIEDRAS HERMOSAS. BOHO-CHIC', 'collar2.jpg', 'Largo del collar: 60 Centímetros Piedra preciosa: Cuarzo rosa Largo ajustable. Collar hecho con la técnica de micro macramé, con dos piedras hermosas amatista. Collar cuidadosamente elaborado, la cintura es ajustable por un nudo deslizante. Pieza única y original', 7, 2, 2, '11540', '20', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

DROP TABLE IF EXISTS `sizes`;
CREATE TABLE IF NOT EXISTS `sizes` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `sizes`:
--

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`id`, `name`) VALUES
(1, 'pequeño'),
(2, 'mediano'),
(3, 'grande');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `userName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;

--
-- RELACIONES PARA LA TABLA `users`:
--

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `userName`, `email`, `avatar`, `password`) VALUES
(9, 'Freddy Mercury', 'Freddy', 'fred@gmail.com', '1620706352550_img.jpg', '$2a$10$l/vwXGdGK3UyB/IMZA3FseO1eMPl3.86cMYnTN'),
(10, 'Lara Acosta', 'LaraLara', 'lara@gmail.com', '1620754753971_img.jpg', '$2a$10$spAhD5EoSav.Ui/RxSDGL.FHJUGNvElREZewm34kTEovl1L86X9TS');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_products_categories` FOREIGN KEY (`categoryId`) REFERENCES `online_store`.`categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_products_colors` FOREIGN KEY (`colorId`) REFERENCES `online_store`.`colors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_products_sizes` FOREIGN KEY (`sizeId`) REFERENCES `online_store`.`sizes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
