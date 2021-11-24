# Demo 1

## Introduction to docker cli

View the Docker version and commands

```bash
docker
docker version
docker info
docker run --help
docker images --help
```

Download [Node.js](https://hub.docker.com/_/node) 16 Apline and [Nginx](https://hub.docker.com/_/nginx) 1.20 Alpine

```bash
docker images
docker pull node:16-alpine
docker pull nginx:1.20-alpine
docker images
docker inspect nginx:1.20-alpine | jq
```

Start a container in foreground and background mode

```bash
docker ps
docker run nginx:1.20-alpine
docker ps
docker ps -a
docker rm $(docker ps -l -q)
docker ps -a
CONTAINER_ID=$(docker run -d nginx:1.20-alpine)
echo $CONTAINER_ID
docker ps
docker inspect $CONTAINER_ID | jq
```

Exec a command in the container

```bash
docker exec $CONTAINER_ID echo Hi from the container
docker exec -it $CONTAINER_ID /bin/sh
exit
```

Stop and delete a container

```bash
docker stop $CONTAINER_ID
docker ps -a
docker rm $CONTAINER_ID
docker ps -a
```

Start a container in interactive mode with auto remove

```bash
docker run -it --rm nginx:1.20-alpine /bin/sh
hostname
exit
docker ps -a
```

Start a named container

```bash
docker run -d --name nginx nginx:1.20-alpine
docker ps -a
docker rm -f nginx
docker ps -a
```

## Navigation

- [Back to main](../README.md)
- [Next demo](../demo_2/README.md)
