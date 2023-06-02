FROM node:20-slim

WORKDIR /usr/src/app

COPY sneak-sneaker-api/ ./

EXPOSE 3000
