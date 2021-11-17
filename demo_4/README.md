# Demo 4

## Introduction to cgroups

Start a container with memory limit and use tail to allocate memory

```bash
docker run -it --rm -m 32m --memory-swap 32m --name nginx nginx:1.20-alpine /bin/sh -c 'cat /dev/zero | head -c 8m | tail && echo Success'
docker run -it --rm -m 32m --memory-swap 32m --name nginx nginx:1.20-alpine /bin/sh -c 'cat /dev/zero | head -c 32m | tail && echo Success'
```

## Navigation

- [Back to main](../README.md)
- [Next demo](../demo_5/README.md)
- [Previous demo](../demo_3/README.md)
