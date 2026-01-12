# 🌹 Macramé Rose

> Tienda online de artículos artesanales de macramé, hecha con amor en Argentina.

![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)
![Express](https://img.shields.io/badge/Express-4.18-blue?logo=express)
![MySQL](https://img.shields.io/badge/MySQL-8.0-orange?logo=mysql)
![React](https://img.shields.io/badge/React-17-61DAFB?logo=react)
![License](https://img.shields.io/badge/License-ISC-yellow)

---

## 📋 Descripción

**Macramé Rose** es una aplicación web fullstack para la venta de productos artesanales de macramé. El proyecto incluye una tienda online con catálogo de productos, sistema de usuarios, panel de administración y API REST.

### 🛍️ Categorías de productos

| Categoría | Descripción |
|-----------|-------------|
| 🌿 Porta Macetas | Colgadores y soportes para plantas |
| 🛋️ Almohadones | Fundas y cojines decorativos |
| 👜 Bolsos y Carteras | Accesorios de moda artesanales |
| 🪟 Cortinas | Paneles decorativos para ventanas |
| ✨ Accesorios | Joyería y complementos |
| 🎨 Adornos | Decoración de pared y colgantes |
| 🪞 Espejos | Espejos con marco de macramé |

---

## 🚀 Tecnologías

### Backend
- **Node.js** - Entorno de ejecución
- **Express.js** - Framework web
- **Sequelize** - ORM para MySQL
- **EJS** - Motor de plantillas
- **Express Validator** - Validación de formularios
- **Multer** - Subida de archivos
- **Bcrypt** - Encriptación de contraseñas

### Frontend
- **HTML5 / CSS3** - Estructura y estilos
- **JavaScript** - Interactividad
- **React** - Dashboard de administración

### Base de Datos
- **MySQL / MariaDB** - Base de datos relacional

---

## 📁 Estructura del Proyecto

```
macrameRose/
├── app.js                 # Punto de entrada de la aplicación
├── controllers/           # Controladores MVC
│   ├── api/              # Controladores de la API REST
│   ├── mainController.js
│   ├── productsController.js
│   └── usersController.js
├── database/
│   ├── config/           # Configuración de Sequelize
│   ├── migrations/       # Migraciones de BD
│   └── models/           # Modelos Sequelize
├── middlewares/          # Middlewares personalizados
├── public/               # Archivos estáticos
│   ├── css/
│   ├── img/
│   └── js/
├── routes/               # Definición de rutas
│   ├── api/             # Rutas de la API
│   ├── main.js
│   ├── products.js
│   └── users.js
├── views/                # Vistas EJS
│   └── partials/        # Componentes reutilizables
├── dashboard/            # Panel admin (React)
└── .env                  # Variables de entorno
```

---

## ⚙️ Instalación

### Requisitos previos

- Node.js 18+
- MySQL 8.0+ o MariaDB 10.4+
- Git

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/laylarodas/macrameRose.git
   cd macrameRose
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   
   Crear archivo `.env` en la raíz:
   ```env
   PORT=3001
   NODE_ENV=development
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_NAME=macrame_db
   DB_USER=root
   DB_PASSWORD=tu_contraseña
   SESSION_SECRET=tu_secreto_de_sesion
   ```

4. **Crear la base de datos**
   ```bash
   mysql -u root -p -e "CREATE DATABASE macrame_db"
   ```

5. **Importar estructura y datos**
   ```bash
   mysql -u root -p macrame_db < macrame_db_estructure.sql
   mysql -u root -p macrame_db < macrame_db_data.sql
   ```

6. **Iniciar el servidor**
   ```bash
   npm run dev
   ```

7. **Abrir en el navegador**
   ```
   http://localhost:3001
   ```

---

## 🔗 API REST

La aplicación expone una API REST para consumo externo.

### Endpoints disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/api/products` | Lista todos los productos |
| GET | `/api/products/:id` | Detalle de un producto |
| GET | `/api/users` | Lista todos los usuarios |
| GET | `/api/categories` | Lista todas las categorías |

### Ejemplo de respuesta

```json
{
  "meta": {
    "status": 200,
    "count": 21,
    "url": "/api/products"
  },
  "data": [
    {
      "id": 1,
      "name": "Colgador de Plantas Grande",
      "price": "2310",
      "discount": "0",
      "categoryId": 1,
      "image": "portamaceta1.jpg"
    }
  ]
}
```

---

## 📸 Capturas de Pantalla

### Página Principal
*Próximamente*

### Catálogo de Productos
*Próximamente*

### Panel de Administración
*Próximamente*

---

## 🛣️ Roadmap

- [x] CRUD de productos
- [x] Sistema de autenticación
- [x] API REST
- [x] Panel de administración (React)
- [ ] Carrito de compras
- [ ] Pasarela de pagos
- [ ] Sistema de favoritos
- [ ] Filtros avanzados
- [ ] Rediseño UI/UX moderno

---

## 🎯 Público Objetivo

Personas adultas que aprecian los productos hechos a mano, ubicadas en cualquier punto de la República Argentina, que deseen adquirir artículos de macramé únicos y/o personalizados.

---

## 👩‍💻 Autora

**Layla Rodas**  
📍 Argentina  
🔗 [GitHub](https://github.com/laylarodas)

---

## 📄 Licencia

Este proyecto está bajo la Licencia ISC. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- [Digital House](https://www.digitalhouse.com/) - Formación en desarrollo web
- Sitios de referencia: [Arredo](https://www.arredo.com.ar/), [Etsy](https://www.etsy.com/), [Casika](https://casika.es/)

---

<p align="center">
  Hecho con 💜 y mucho macramé 🌹
</p>
