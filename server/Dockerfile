FROM node:18

# Carpeta donde se ejecutará la app dentro del contenedor
WORKDIR /app

# Solo copias los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalás dependencias del proyecto
RUN npm install

# Instalás nodemon globalmente
RUN npm install -g nodemon

# No copiás el resto del código porque lo montás con volumen (./server:/app)

# Iniciás el servidor con autoreload
CMD ["nodemon", "index.js"]
