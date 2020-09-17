# REST API: NODE.JS + MONGO

---

Building a REST API to manage ... with Node.js and Express + MongoDB
using Docker containers.

## Table of Contents

- [Usage](#Usage)
- [Dependencies](#Dependecies)

## Usage

#### Docker Compose

Para que la aplicación funcione, se necesita que base de datos en mongo y el servidor en node esten funcionando, para ello se ha configurado un archivo docker compose, el cual tomará como entrada la cofiguracion del archivo **_'docker-compose.yml'_**, en el que se enlazan los dos contenedores.

> Construir las imagenes y levantar los contenedores:

- Al levantar la imagen estaremos en modo desarrollo

```compose
docker-compose build

docker-compose up
```

---

## Dependencies

---

## Anexo

### Scaffolding

- /config:
  - Configuracion de las variables de entorno y otras como los puertos en los que tiene que correr el servidor.
- controllers:
  - funcionalidades para hacer las consultas a la DB.
- /models:
  - Estarán los modelos de la base de datos, que campos y datos tienen.
- /routes:
  - Estarás las rutas de la aplicación.
- /views:
  - En este se encontraran todas las vistas que se enviaran al navegador con el que desarrollaremos las

### Comandos útiles

> Docker

```
- Listar imagenes -> docker images
- borrar imagenes -> docker rmi $(docker images -q)
- borrar contenedores -> docker rm $(docker ps -a -q)
- Listar contenedores -> docker ps -a
```

> Package conf:

```
When you have 'type: module' in the package.json file, your source code should use import syntax. When you do not have, you should use require syntax.
Adding 'type': 'module' to the package.json enables ES 6 modules. For more info, see here.
https://nodejs.org/docs/latest-v13.x/api/esm.html#esm_enabling
Official:
https://medium.com/@nodejs/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663
```
