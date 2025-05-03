# client/Dockerfile
FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Compilar la app de React para producción
RUN npm run build

# Usar Nginx para servirla
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 80