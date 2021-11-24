# Demo 2

## Introduction to namespaces

Processes namespace

```bash
docker run --name nginx1 -d nginx:1.20-alpine
docker exec nginx1 ps -ef
pstree -p
docker exec -d nginx1 sleep 600
docker exec nginx1 ps -ef
pstree -p
docker run --name nginx2 -d nginx:1.20-alpine
pstree -p
```

UTS namespace

```bash
hostname
docker exec nginx1 hostname
```

Mount namespace

```bash
mount
docker exec nginx1 mount
docker rm -f $(docker ps -a -q)
```

Network namespace

```bash
ip addr
docker run --name nginx1 -d nginx:1.20-alpine
docker exec nginx1 ip addr
ip addr
docker run --name nginx2 -d nginx:1.20-alpine
docker exec nginx2 ip addr
ip addr
docker rm -f $(docker ps -a -q)
```

User ID namespace

```bash
ls -la /tmp
docker run --rm -v /tmp:/host nginx:1.20-alpine /bin/sh -c 'whoami; touch /host/container_root'
ls -la /tmp
docker run --rm -v /tmp:/host -u=1000:1000 nginx:1.20-alpine /bin/sh -c 'whoami; touch /host/container_ubuntu'
ls -la /tmp
echo '---' | cat /etc/subuid - /etc/subgid
echo -e '{\n  "userns-remap": "ubuntu"\n}' | sudo tee /etc/docker/daemon.json
sudo systemctl restart docker.service
docker images
docker info | grep 'Docker Root Dir'
docker run --rm -v /tmp:/host nginx:1.20-alpine /bin/sh -c 'whoami; touch /host/container_remapped'
ls -la /tmp
sudo rm /etc/docker/daemon.json
sudo systemctl restart docker.service
sudo rm -rf /tmp/container_* /var/lib/docker/100000.100000
```

## Navigation

- [Back to main](../README.md)
- [Next demo](../demo_3/README.md)
- [Previous demo](../demo_1/README.md)
