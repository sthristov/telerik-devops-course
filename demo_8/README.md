# Demo 8

## Introduction to Introduction to multi-stage builds

Compare the size of the builder and final images

_Note: Make sure to execute the below commands in the demo directory._

```bash
docker build -t demo-go .
docker images
dive demo-go
docker run -it --rm demo-go
```

## Navigation

- [Back to main](../README.md)
- [Next demo](../demo_9/README.md)
- [Previous demo](../demo_7/README.md)
