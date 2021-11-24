# Demo 3

## Introduction to Overlay2

Inspect the image with docker cli

```bash
sudo ls -l /var/lib/docker/overlay2
sudo ls -l /var/lib/docker/overlay2/l
docker inspect nginx:1.20-alpine | jq .[0].GraphDriver.Data.LowerDir | jq 'split(":")'
FIRST_LAYER=$(docker inspect nginx:1.20-alpine | jq .[0].GraphDriver.Data.LowerDir | jq 'split(":")' | jq -r .[-1])
sudo ls -la ${FIRST_LAYER%/diff}
```

Inspect the image with dive

```bash
dive nginx:1.20-alpine
```

Start a container and inspect the layers

```bash
CONTAINER_ID=$(docker run -d nginx:1.20-alpine)

docker inspect nginx:1.20-alpine | jq .[0].GraphDriver.Data
docker inspect $CONTAINER_ID | jq .[0].GraphDriver.Data

docker inspect nginx:1.20-alpine | jq .[0].GraphDriver.Data.LowerDir | jq 'split(":")'
docker inspect $CONTAINER_ID | jq .[0].GraphDriver.Data.LowerDir | jq 'split(":")'

SECOND_LAST=$(docker inspect $CONTAINER_ID | jq .[0].GraphDriver.Data.LowerDir | jq 'split(":")' | jq -r .[1])
sudo tree $SECOND_LAST

LAST=$(docker inspect $CONTAINER_ID | jq .[0].GraphDriver.Data.LowerDir | jq 'split(":")' | jq -r .[0])
sudo tree $LAST

MERGED=$(docker inspect $CONTAINER_ID | jq -r .[0].GraphDriver.Data.MergedDir)
sudo ls -la $MERGED

mount | grep overlay

docker exec $CONTAINER_ID touch newFile.txt
sudo ls -la $MERGED

docker rm -f $CONTAINER_ID
```

## Navigation

- [Back to main](../README.md)
- [Next demo](../demo_4/README.md)
- [Previous demo](../demo_2/README.md)
