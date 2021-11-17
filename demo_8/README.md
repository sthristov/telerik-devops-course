# Demo 8

## Introduction to Introduction to multi-stage builds

Compare the size of the builder and final images

```bash
docker build -t demo-go .
docker images
dive demo-go
docker run --rm demo-go
docker build --target builder -t demo-go-builder .
docker images
```

## Navigation

- [Back to main](../README.md)
- [Next demo](../demo_9/README.md)
- [Previous demo](../demo_7/README.md)
