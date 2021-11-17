# Demo 9

## Introduction to docker-compose

Use `docker-compose` to build a GraphQL API and start a MongoDB container.

```bash
docker-compose up -d
curl -s 'http://localhost/' -X POST -H 'content-type: application/json' --data '{ "query": "{ teams { name members department } }" }' | jq
docker-compose down
```

## Navigation

- [Back to main](../README.md)
- [Previous demo](../demo_8/README.md)
