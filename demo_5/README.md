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
docker network ls
docker network inspect bridge
docker rm -f nginx
```

## Navigation

- [Back to main](../README.md)
- [Next demo](../demo_6/README.md)
- [Previous demo](../demo_4/README.md)
