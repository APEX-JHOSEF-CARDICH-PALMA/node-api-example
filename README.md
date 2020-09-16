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

```
docker-compose build

docker-compose up
```

---

## Dependencies

---

## Anexo

### Comandos útiles

> Docker

```
- borrar imagenes -> docker rmi $(docker images -q)
- borrar contenedores -> docker rm $(docker ps -a -q)
- Listar contenedores -> docker ps -a
```
