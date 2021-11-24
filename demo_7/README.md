# Demo 7

## Introduction to Dockerfile

Build a simple GraphQL API using Dockerfile locally.
Demonstrate layer caching by adding a dummy `RUN` instruction.

_Note: Make sure to execute the below commands in the demo directory._

```bash
docker build -t api .
dive api
docker run --name api -d -p 80:4000 api
curl -s 'http://localhost/' -X POST -H 'content-type: application/json' --data '{ "query": "{ teams { id name members department } }" }' | jq
docker rm -f api
```

## GitHub Actions build

Push a commit to the `master` branch to start the GitHub Actions workflow.

```bash
docker run --name graphql-demo-api -d -p 80:4000 sthristov/graphql-demo-api:2021-11-17-69f29a69
curl -s 'http://localhost/' -X POST -H 'content-type: application/json' --data '{ "query": "{ teams { id name members department } }" }' | jq
docker rm -f graphql-demo-api
```

## Navigation

- [Back to main](../README.md)
- [Next demo](../demo_8/README.md)
- [Previous demo](../demo_6/README.md)
