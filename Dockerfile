# alpine é uma imagem leve do linux
FROM node:14.15.4-alpine3.12

# terminal bash
RUN apk add --no-cache bash

# instalar o dockerize
ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

# fixa a versão 8.0.0 porque é a versão que estamos usando no @nestjs/common @nestjs/core
RUN npm install -g @nestjs/cli@8.0.0

# criar user node para evitar usar o root
USER node

WORKDIR /home/node/app

