# Medical Appointments API

API REST para la gestión de citas médicas desarrollada con **Node.js**.  
Permite administrar pacientes, doctores y citas mediante operaciones CRUD a través de endpoints HTTP.

## 📚 Descripción

Este proyecto consiste en una API backend diseñada para gestionar citas médicas.  
La aplicación permite crear, consultar, actualizar y eliminar información relacionada con pacientes, doctores y citas médicas.

La API sigue principios REST y utiliza métodos HTTP estándar para interactuar con los recursos del sistema.

## 🚀 Tecnologías utilizadas

- Node.js
- JavaScript
- Prisma ORM
- REST API
- Postman (para pruebas de endpoints)
- Railway (despliegue)

## ⚙️ Características

- Arquitectura por capas:
  - Controllers
  - Services
  - Models
- Operaciones CRUD para:
  - Pacientes
  - Doctores
  - Citas médicas
- Manejo de asincronía con **async/await**
- Persistencia de datos mediante **Prisma ORM**
- Pruebas de endpoints con **Postman**
- Despliegue de la API en **Railway**

## 📂 Estructura del proyecto

```
src
 ├── controllers
 ├── services
 ├── models
 ├── routes
 └── app.js
```

Esta estructura separa la lógica de negocio, las rutas y el acceso a datos para mejorar la organización del código.

## ▶️ Instalación y uso

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/EnriBr14/medical-appointments-api
```

### 2️⃣ Entrar al proyecto

```bash
cd medical-appointments-api
```

### 3️⃣ Instalar dependencias

```bash
npm install
```

### 4️⃣ Ejecutar el servidor

```bash
npm run dev
```

El servidor se ejecutará en:

```
http://localhost:3000
```

## 🔎 Ejemplo de endpoints

| Método | Endpoint | Descripción |
|------|------|------|
| GET | /patients | Obtener todos los pacientes |
| GET | /doctors | Obtener todos los doctores |
| GET | /appointments | Obtener todas las citas |
| POST | /appointments | Crear una nueva cita |
| PUT | /appointments/:id | Actualizar una cita |
| DELETE | /appointments/:id | Eliminar una cita |

## 🧪 Pruebas

Los endpoints pueden probarse usando herramientas como **Postman** o **Insomnia** enviando solicitudes HTTP a los endpoints de la API.

## 🌐 Despliegue

La API se encuentra desplegada utilizando **Railway**, lo que permite ejecutar el backend en la nube.

## 🎯 Objetivo del proyecto

- Practicar desarrollo **backend con Node.js**
- Implementar **APIs REST**
- Aplicar **arquitectura por capas**
- Trabajar con **Prisma ORM**
- Simular un sistema real de gestión de citas médicas

## 👨‍💻 Autor

**Enrique Bravo**

GitHub:  
https://github.com/EnriBr14