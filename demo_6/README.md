# Demo 6

## Introduction to volumes

Mount a folder with a static site and serve it.
Read-write and read-only mounts.

_Note: Make sure to execute the below commands in the demo directory._

```bash
docker run --name nginx -d -v $(pwd)/page:/usr/share/nginx/html -p 80:80 nginx:1.20-alpine
curl http://docker # On the workstation
docker exec nginx touch /usr/share/nginx/html/container_rw
ls -la page/
docker rm -f nginx
docker run --name nginx -d -v $(pwd)/page:/usr/share/nginx/html:ro -p 80:80 nginx:1.20-alpine
docker exec nginx touch /usr/share/nginx/html/container_ro
ls -la page/
docker rm -f nginx
```

## Navigation

- [Back to main](../README.md)
- [Next demo](../demo_7/README.md)
- [Previous demo](../demo_5/README.md)
