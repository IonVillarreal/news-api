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

### Autenticación

#### Iniciar sesión

```bash
curl --location 'http://localhost:3000/auth/login' \
--header 'Content-Type: application/json' \
--data '{
    "username": "testuser1",
    "password": "password1"
}'
```

#### Obtener información del usuario autenticado

```bash
curl --location 'http://localhost:3000/user/me' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcyODMyNDcwNSwiZXhwIjoxNzI4MzI4MzA1fQ.EFj2Re2yDaq341_7YXfSjIsoAD3AI51qXI60-WvQJQ4'
```

### Noticias

#### Obtener todas las noticias

```http
GET /news
```

Parámetros opcionales de paginación:

- `page`: Número de página (por defecto: 1)
- `pageSize`: Tamaño de la página (por defecto: 10)

Ejemplo de petición:

```bash
curl --location 'http://localhost:3000/news?page=1&pageSize=5'
```

#### Obtener una noticia por ID

```http
GET /news/:id
```

Ejemplo de petición:

```bash
curl --location 'http://localhost:3000/news/1'
```

#### Crear una noticia

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

Ejemplo de petición:

```bash
curl --location --request POST 'http://localhost:3000/news' \
--header 'Content-Type: application/json' \
--data-raw '{
  "title": "Nueva noticia",
  "description": "Descripción de la nueva noticia",
  "date": "2024-10-07T12:00:00.000Z"
}'
```

#### Actualizar una noticia

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

Ejemplo de petición:

```bash
curl --location --request PUT 'http://localhost:3000/news/1' \
--header 'Content-Type: application/json' \
--data-raw '{
  "title": "Título actualizado",
  "description": "Descripción actualizada",
  "date": "2024-10-07T12:00:00.000Z"
}'
```

#### Eliminar una noticia

```http
DELETE /news/:id
```

Ejemplo de petición:

```bash
curl --location --request DELETE 'http://localhost:3000/news/1'
```
