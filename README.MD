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

## 👥 Colaboradores

@Hatusil

© 2025 Ewoc-Logic - Todos los derechos reservados

