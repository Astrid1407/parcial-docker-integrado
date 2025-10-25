# Parcial  – Docker + Node.js + PostgreSQL + Docker Compose  

**Estudiante:** Dalila Astrid Murcia Medina  
**Expediente:** 25759  
**Código:** MM22-I04-001  
**Universidad de Sonsonate – Ingeniería en Sistemas**

---

##  Descripción General  

Este proyecto demuestra la integración de **Node.js, PostgreSQL y Docker Compose** aplicando buenas prácticas de desarrollo y despliegue.  

Se desarrollaron **tres ejercicios principales**:  
1. Construcción de un contenedor funcional y optimizado con Dockerfile.  
2. Persistencia de datos con PostgreSQL mediante volúmenes.  
3. Integración de los servicios con Docker Compose (redes, volúmenes y dependencias).  

---

## ⚙️ Tecnologías Utilizadas  

- **Node.js v18**  
- **Express.js**  
- **PostgreSQL 16 (alpine)**  
- **Docker & Docker Compose**  
- **Linux WSL (Ubuntu)**  

---

#  Ejercicio 1 – Servicio Node.js con Dockerfile  

###  Objetivo  
Crear un servicio Node.js funcional dentro de un contenedor Docker aplicando buenas prácticas de optimización y seguridad.

---

###  Archivos principales  

#### **server.js**
```js
import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.json({
    estudiante: {
      nombre: "Dalila Astrid Murcia Medina",
      expediente: "25759",
      codigo: "MM22-I04-001"
    }
  });
});

app.get("/health", (_req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));


Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN chown -R node:node /app
USER node
EXPOSE 3000
CMD ["npm", "start"]


Comandos de prueba
docker-compose up -d
docker ps
curl http://localhost:3000/
curl http://localhost:3000/health
docker-compose down


Evidencias

docker ps muestra el contenedor api activo y el db saludable.

curl http://localhost:3000/ devuelve los datos del estudiante.

curl http://localhost:3000/health responde con { "status": "OK" }.


Ejercicio 2 – Persistencia de Datos en PostgreSQL
 Objetivo

Demostrar la persistencia de datos de PostgreSQL usando volúmenes Docker.

Configuración de la base de datos (en docker-compose.yml)
services:
  db:
    image: postgres:16-alpine
    container_name: db
    environment:
      POSTGRES_DB: parcial_db
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: admin123
    ports:
      - "5432:5432"
    volumes:
      - db_data:/var/lib/postgresql/data

volumes:
  db_data:

Comandos ejecutados
docker exec -it db psql -U admin -d parcial_db

CREATE TABLE estudiantes (
  id SERIAL PRIMARY KEY,
  nombre TEXT,
  carnet TEXT
);

INSERT INTO estudiantes (nombre, carnet) VALUES
('Dalila Astrid Murcia Medina', 'MM22-I04-000'),
('Sofía Orantes', 'MM22-I04-001'),
('Gabriela López', 'MM22-I04-002'),
('Carlos Fabián', 'MM22-I04-003'),
('Mario Reynaldo', 'MM22-I04-004');

SELECT * FROM estudiantes;
\q

docker restart db
docker exec -it db psql -U admin -d parcial_db
SELECT * FROM estudiantes;


Ejercicio 3 – Integración Completa con Docker Compose
Objetivo

Integrar el servicio Node.js (api) y la base de datos PostgreSQL (db) dentro de una red compartida mediante Docker Compose.
docker-compose.yml
version: "3.8"

services:
  api:
    build: .
    container_name: api
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      - DB_HOST=db
      - DB_USER=admin
      - DB_PASSWORD=admin123
      - DB_NAME=parcial_db
    networks:
      - app_net

  db:
    image: postgres:16-alpine
    container_name: db
    environment:
      POSTGRES_DB: parcial_db
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: admin123
    volumes:
      - db_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    networks:
      - app_net

networks:
  app_net:
    driver: bridge

volumes:
  db_data:

Comandos ejecutados
docker-compose up -d
docker network ls
docker volume ls
docker ps

Conclusión Final del Proyecto

Los tres ejercicios se realizaron exitosamente.
Se construyó un contenedor optimizado para Node.js,
se comprobó la persistencia de PostgreSQL,
y se logró la integración total mediante Docker Compose.
El proyecto demuestra el dominio de la virtualización de servicios, persistencia de datos y buenas prácticas de despliegue con Docker.

Comandos de referencia
# Levantar servicios
docker-compose up -d

# Ver contenedores activos
docker ps

# Entrar al contenedor de base de datos
docker exec -it db psql -U admin -d parcial_db

# Consultar datos
SELECT * FROM estudiantes;

# Reiniciar base de datos
docker restart db

# Detener servicios
docker-compose down

Autor:
Dalila Astrid Murcia Medina
Universidad de Sonsonate – Ingeniería en Sistemas

