# 🩺 Gestión de Agenda Médica

Sistema fullstack para gestionar turnos médicos, pacientes, profesionales y servicios. Construido con React, Node.js/Express, MySQL y Docker.

---

## 📦 Estructura del proyecto

```bash
gestion-agenda-medica/
│
├── client/                # Frontend React
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   ├── .env.example
│   └── Dockerfile
│
├── server/                # Backend Node/Express
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── config/
│   ├── index.js
│   ├── .env.example
│   └── Dockerfile
│
├── docker-compose.yml
├── README.md
└── .gitignore

```

---

## 🚀 Requisitos

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)
- Git

---

## 📥 Clonar el proyecto

git clone https://github.com/Hatusil/gestion-agenda-medica
cd gestion-agenda-medica

---

## 🔧 Archivos de entorno
Crear los archivos .env en las carpetas necesarias.

📁 server/.env
```bash
DB_HOST=mysql
DB_USER=user
DB_PASSWORD=pass
DB_NAME=agenda
```
Podés usar el archivo .env.example como base.

---

## 🐳 Levantar el entorno

```bash
docker-compose up
```
Este comando:
Inicia MySQL en localhost:3306
Lanza el backend Express en http://localhost:5000
Lanza el frontend React en http://localhost:3000

---

## 🛠️ Desarrollo en vivo

El backend está montado con bind-mount, por lo que podés editar el código sin necesidad de reconstruir la imagen.

Para ver cambios automáticamente:
Asegurate de usar nodemon o similar en el Dockerfile del backend, por ejemplo:

```bash
CMD ["npx", "nodemon", "index.js"]
```

---

## 🧪 Test de conexión a la base de datos
Podés probar que todo funciona accediendo a:

```bash
http://localhost:3000/test
```

Asegurate de tener la ruta /test-db configurada en tu backend y TestDB.jsx en tu frontend.

---

## 🧹 Otros comandos útiles

```bash
Copiar
Editar
docker-compose down       # Apagar todos los contenedores
docker-compose up --build # Reconstruir imágenes
```

---

# Metodología Git Flow

Git Flow es una metodología para la gestión de versiones en Git que facilita el desarrollo colaborativo y el mantenimiento de un proyecto. Su estructura permite una clara separación entre distintas fases del desarrollo, asegurando estabilidad en producción mientras se trabaja en nuevas funcionalidades.

## Flujo de trabajo

Cada rama tiene un propósito específico dentro del ciclo de vida del desarrollo:

### `master`
Contiene la versión estable y final del proyecto. Solo se actualiza con cambios ya validados que provienen de `release` o `hotfix`.

### `develop`
Actúa como la rama principal para el desarrollo activo. Todas las nuevas funcionalidades y mejoras se integran aquí antes de ser lanzadas a producción.

### `feature/`
Se crean a partir de `develop` para desarrollar nuevas características de manera aislada. Una vez completadas, se integran nuevamente a `develop` para ser probadas.

### `release/`
Son utilizadas para preparar el lanzamiento de una nueva versión estable. Permiten realizar ajustes finales antes de fusionar los cambios en `master` y `develop`.

### `hotfix/`
Se crean a partir de `master` para solucionar errores críticos que requieren una corrección inmediata en producción. Tras aplicar los cambios, se fusionan en `master` y `develop`.

## Visualización del flujo

```plaintext
           ┌───────── Master ─────────┐
           │                          │
       Hotfix                     Release
           │                          │
           ├────────── Develop ───────┤
                      │
            ┌────────┴────────┐
          Feature1        Feature2


### Ventajas de Git Flow:
- **Estructura clara**: Ideal para proyectos grandes y complejos.
- **Separación clara de entornos**: Permite gestionar entornos de desarrollo, prueba y producción con facilidad.
- **Facilidad de gestión de versiones**: Las ramas release y hotfix permiten gestionar lanzamientos y correcciones sin interrumpir el desarrollo principal.


---

## 👥 Colaboradores

@Hatusil

© 2025 Ewoc-Logic - Todos los derechos reservados

