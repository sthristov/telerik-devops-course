FROM golang:1.17-alpine as builder
WORKDIR /go/src/app
COPY app/ .
RUN go build -a .

FROM alpine:3.14
WORKDIR /app
COPY --from=builder /go/src/app/app .
CMD ["./app"]
