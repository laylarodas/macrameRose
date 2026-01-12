# 🌹 Guía de Instalación - Macramé Rose

## Requisitos Previos

### 1. Node.js (versión 18 o superior)
Descarga desde: https://nodejs.org/

Verifica tu instalación:
```bash
node -v  # Debería mostrar v18.x.x o superior
npm -v   # Debería mostrar 9.x.x o superior
```

### 2. MySQL Server (versión 8.x)
Descarga desde: https://dev.mysql.com/downloads/mysql/

---

## Pasos de Instalación

### Paso 1: Crear archivo de configuración `.env`

Crea un archivo llamado `.env` en la raíz del proyecto con el siguiente contenido:

```env
# Configuración del Servidor
PORT=3001
NODE_ENV=development

# Configuración de Base de Datos MySQL
DB_HOST=127.0.0.1
DB_PORT=3306
DB_NAME=macrame_db
DB_USER=root
DB_PASSWORD=tu_contraseña_aqui

# Configuración de Sesiones
SESSION_SECRET=macrame_rose_secret_2026
```

⚠️ **Importante**: Reemplaza `tu_contraseña_aqui` con tu contraseña de MySQL.

### Paso 2: Crear la base de datos

Abre MySQL y ejecuta:
```sql
CREATE DATABASE macrame_db;
```

O importa la estructura completa:
```bash
mysql -u root -p macrame_db < macrame_db_estructure.sql
mysql -u root -p macrame_db < macrame_db_data.sql
```

### Paso 3: Instalar dependencias del Backend

```bash
npm install
```

### Paso 4: Ejecutar migraciones (si no importaste SQL)

```bash
npm run db:migrate
```

### Paso 5: Iniciar el servidor

```bash
# Modo desarrollo (con hot reload)
npm run dev

# Modo producción
npm start
```

El servidor estará disponible en: http://localhost:3001

---

## Dashboard de Administración (React)

### Instalar dependencias del Dashboard

```bash
cd dashboard
npm install
```

### Iniciar el Dashboard

```bash
npm start
```

El dashboard estará en: http://localhost:3000

---

## Estructura de URLs

| URL | Descripción |
|-----|-------------|
| http://localhost:3001 | Tienda principal |
| http://localhost:3001/products | Catálogo de productos |
| http://localhost:3001/user/login | Inicio de sesión |
| http://localhost:3001/user/register | Registro de usuarios |
| http://localhost:3001/api/products | API de productos (JSON) |
| http://localhost:3001/api/users | API de usuarios (JSON) |
| http://localhost:3000 | Dashboard admin (React) |

---

## Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor en modo desarrollo |
| `npm start` | Inicia el servidor en modo producción |
| `npm run db:migrate` | Ejecuta las migraciones de BD |
| `npm run db:seed` | Ejecuta los seeders de BD |
| `npm run db:reset` | Reinicia la BD completa |

---

## Solución de Problemas

### Error: "ER_ACCESS_DENIED_ERROR"
- Verifica que el usuario y contraseña en `.env` sean correctos
- Asegúrate de que MySQL esté corriendo

### Error: "ER_BAD_DB_ERROR"
- Crea la base de datos: `CREATE DATABASE macrame_db;`

### Error: "MODULE_NOT_FOUND"
- Ejecuta `npm install` nuevamente

### El Dashboard no conecta con la API
- Asegúrate de que el backend esté corriendo en el puerto 3001
- El archivo `dashboard/package.json` tiene configurado el proxy a `http://localhost:3001`

---

## ¿Necesitas ayuda?

Abre un issue en: https://github.com/laylarodas/macrameRose/issues
