# 🚀 Backend Node.js - KeepCoding Web Bootcamp

<div align="center">

[![NodeJS](https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

## 📖 Descripción 
### ¿Qué es este repositorio?
Este repositorio alberga los proyectos y ejercicios prácticos desarrollados durante el módulo de **Backend con Node.js** del **Bootcamp Web FullStack XIX de KeepCoding**. El núcleo del trabajo es la creación de una API REST robusta y una aplicación web utilizando la arquitectura MVC.

### ¿Por qué lo hice?
- **Formación Profesional**: Para dominar el desarrollo del lado del servidor ("Server Side").
- **Objetivo Académico**: Comprender el funcionamiento del Event Loop, la asincronía y el protocolo HTTP.
- **Desafío Técnico**: Implementar autenticación, gestión de bases de datos NoSQL y despliegue de servicios.

---

## ✨ Características Principales
### ⚙️ Backend & API
- ✅ **API RESTful** - Endpoints estructurados para recursos (Usuarios, Agentes, Tareas).
- ✅ **Arquitectura MVC** - Separación clara de Modelos, Vistas y Controladores.
- ✅ **MongoDB & Mongoose** - Modelado de datos con esquemas, validaciones e índices.
- ✅ **Middleware Personalizado** - Gestión de errores, logs y validaciones.

### 🔐 Seguridad & Autenticación
- ✅ **JWT & Sessions** - Estrategias de autenticación y mantenimiento de sesión.
- ✅ **Hashing** - Protección de contraseñas con bcrypt.
- ✅ **Guardas de Rutas** - Protección de endpoints privados.

### 🛠️ Funcionalidades Técnicas
- ✅ **Vistas con EJS** - Renderizado del lado del servidor (SSR).
- ✅ **Carga de Datos** - Scripts de "seeding" para inicializar la base de datos.
- ✅ **Internacionalización** - Preparación para soporte multi-idioma.

---

## 🛠️ Stack Tecnológico

| Core | Database | Tools |
|----------|---------|-------------|
| Node.js (v22+) | MongoDB 7.0 | VS Code |
| Express.js 5 | Mongoose OD | Postman / Insomnia |
| EJS (Template Engine) | MongoDB Compass | Git & GitHub |

---

## 📁 Estructura del Proyecto
```text
backend-js/
├── 📁 node-api/           # Proyecto Principal (API + Web)
│   ├── 📁 bin/            # Scripts de arranque (www)
│   ├── 📁 controllers/    # Lógica de negocio
│   ├── 📁 models/         # Esquemas de Mongoose
│   ├── 📁 routes/         # Definición de rutas API y Web
│   ├── 📁 views/          # Plantillas EJS
│   ├── 📄 app.js          # Configuración de Express
│   └── 📄 seedDB.js       # Script de carga de datos iniciales
├── 📁 examples/           # Ejercicios de conceptos (Promesas, Clases, etc)
├── 📁 example-practice/   # Prácticas variadas y pruebas de concepto
└── 📄 README.md           # Documentación del repositorio
```

## 🚀 Cómo Ejecutar el Proyecto (Node API)

### Prerrequisitos
- Node.js instalado.
- Servidor MongoDB corriendo (localmente o en Docker).

### Pasos de instalación

1. **Navegar al directorio del API:**
   ```bash
   cd node-api
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar entorno:**
   Crea un archivo `.env` o asegúrate de que existen las variables de entorno necesarias (PORT, MONGO_URI).

4. **Inicializar base de datos (Opcional):**
   ```bash
   npm run seed
   ```
   *Cuidado: Esto borrará los datos existentes en la colección.*

5. **Arrancar el servidor:**
   ```bash
   # Modo desarrollo
   npm run dev

   # Modo producción
   npm start
   ```

El servidor arrancará por defecto en `http://localhost:3000`.

---

## 🎓 Aprendizajes y Desafíos

### 💡 Conceptos técnicos dominados
- **Asincronía en JS** - Dominio de Promises y Async/Await.
- **Microservicios vs Monolito** - Entendiendo cuándo aplicar cada arquitectura.
- **NoSQL** - Pensar en documentos y agregaciones en lugar de tablas y joins.

### 🚧 Desafíos superados
- **Gestión de Errores** - Centralizar el manejo de errores en Express.
- **Validación de Datos** - Asegurar la integridad de los datos que entran al API.
- **Estructuración** - Organizar el código para que sea escalable y mantenible.

---

## 👨‍💻 Autor
**Sara Gallego Méndez**
*Estudiante de Desarrollo Web Full Stack y Administración de Sistemas*

## 🌐 Contacto
- **GitHub**: [Aratea](https://github.com/Aratea10)
- **LinkedIn**: [Sara Gallego Méndez](https://www.linkedin.com/in/sara-gallego-mendez)
- **X**: [@SaraGallegoM10](https://x.com/SaraGallegoM10)

---

*Desarrollado con ❤️ durante el Bootcamp Full Stack Web XIX*
