FROM node:16-alpine
ENV NODE_ENV production

COPY package*.json app/
COPY app/  app/
WORKDIR /app
RUN npm ci

EXPOSE 4000
CMD [ "node", "index.js" ]
