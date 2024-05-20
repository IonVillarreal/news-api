# News API

Esta es una API RESTful construida con TypeScript, Express y PrismaORM. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) en un conjunto de noticias.

## Requisitos

- Node.js v20+
- npm v10+
- SQLite (opcional, Prisma se encargará de crear la base de datos)

## Instalación

1. Clona el repositorio:

```sh
git clone git@github.com:IonVillarreal/news-api.git
cd news-api
```

2. Instala las dependencias:

```sh
npm install
```

3. Configura Prisma:

```sh
npx prisma migrate dev --name init
npx prisma generate
```

4. Carga los datos iniciales (opcional):

```sh
npm run seed
```

## Uso

### Desarrollo

Para iniciar el servidor en modo desarrollo:

```sh
npm run dev
```

### Producción

Para compilar el código TypeScript:

```sh
npm run build
```

Para iniciar el servidor en modo producción:

```sh
npm start
```

### Migraciones

Para aplicar las migraciones de Prisma:

```sh
npm run migrate
```

### Generar Cliente Prisma

Para generar el cliente Prisma después de modificar el esquema:

```sh
npm run generate
```

### Cargar Datos Iniciales

Para cargar datos iniciales en la base de datos:

```sh
npm run seed
```

## Endpoints

### Obtener todas las noticias

```http
GET /news
```

Parámetros opcionales de paginación:

- `page`: Número de página (por defecto: 1)
- `pageSize`: Tamaño de la página (por defecto: 10)

### Obtener una noticia por ID

```http
GET /news/:id
```

### Crear una noticia

```http
POST /news
```

Cuerpo de la solicitud:

```json
{
  "title": "Título de la noticia",
  "description": "Descripción de la noticia",
  "date": "2024-05-17T00:00:00.000Z"
}
```

### Actualizar una noticia

```http
PUT /news/:id
```

Cuerpo de la solicitud:

```json
{
  "title": "Nuevo título de la noticia",
  "description": "Nueva descripción de la noticia",
  "date": "2024-05-17T00:00:00.000Z"
}
```

### Eliminar una noticia

```http
DELETE /news/:id
```