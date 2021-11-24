# Demo 5

## Introduction to networking

Publish exposed port.

```bash
docker run --name nginx -d nginx:1.20-alpine
docker ps
nmap localhost
docker rm -f nginx
docker run --name nginx -d -p 80:80 nginx:1.20-alpine
docker ps
nmap localhost
nmap -Pn -F docker # On the workstation
curl http://docker # On the workstation
docker rm -f nginx
```

Test communication between containers on the default bridge and a user-defined new one.

```bash
docker network ls
docker run --name nginx1 -d nginx:1.20-alpine
docker run --name nginx2 -d nginx:1.20-alpine
docker network inspect bridge | jq
docker exec nginx1 ping -c 1 8.8.8.8
CONTAINER_IP=$(docker inspect nginx2 | jq -r .[0].NetworkSettings.IPAddress)
docker exec nginx1 ping -c 1 $CONTAINER_IP
docker exec nginx1 ping -c 1 nginx2
docker network create --driver bridge demo
docker network ls
docker network inspect demo | jq
docker run --name nginx3 --network demo -d nginx:1.20-alpine
docker run --name nginx4 --network demo -d nginx:1.20-alpine
docker network inspect demo | jq
ip addr
docker exec nginx3 ping -c 1 nginx4
docker exec nginx3 ping -c 1 $CONTAINER_IP
docker exec nginx3 ping -c 1 nginx1
docker rm -f $(docker ps -a -q)
docker network rm demo
```

## Navigation

- [Back to main](../README.md)
- [Next demo](../demo_6/README.md)
- [Previous demo](../demo_4/README.md)
