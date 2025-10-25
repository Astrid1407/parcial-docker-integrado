Docker + Node.js + PostgreSQL + Docker Compose

Estudiante: Dalila Astrid Murcia Medina
Expediente: 25759
Código: MM22-I04-001
Universidad de Sonsonate – Ingeniería en Sistemas

 Descripción General

Este proyecto integra Node.js, PostgreSQL y Docker Compose, aplicando buenas prácticas de desarrollo y virtualización.
Se construyeron tres ejercicios principales que demuestran el manejo de contenedores, redes, volúmenes y persistencia de datos en entornos Dockerizados.

 Resumen de Actividades

Ejercicio 1:
Se creó un servicio Node.js dentro de un contenedor Docker.
Se aplicaron buenas prácticas como el uso de la imagen ligera node:18-alpine, usuario no root y un Dockerfile optimizado.
El servicio responde en los endpoints / y /health.

Ejercicio 2:
Se implementó una base de datos PostgreSQL con persistencia de datos mediante un volumen Docker.
Se comprobó que los registros permanecen tras reiniciar el contenedor, validando la configuración de persistencia.

Ejercicio 3:
Se integraron ambos servicios (API y base de datos) con Docker Compose, creando una red interna y gestionando automáticamente la conexión y persistencia.

 Resultados

Los tres servicios se ejecutaron correctamente.

La base de datos mantiene los datos tras reinicio.

La aplicación Node.js se conecta de forma estable al contenedor PostgreSQL.

Se documentaron los comandos de ejecución y las pruebas realizadas.

 Conclusión

El proyecto demuestra el dominio de Docker, Node.js, y PostgreSQL,
cumpliendo con los objetivos de crear contenedores eficientes, mantener la persistencia de datos
y lograr una integración completa mediante Docker Compose.

 Autor:
Dalila Astrid Murcia Medina
Universidad de Sonsonate – Ingeniería en Sistemas
