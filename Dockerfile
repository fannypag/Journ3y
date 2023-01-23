#syntax=docker/dockerfile:1
FROM node:16-alpine

WORKDIR /backend

ADD ./backend /backend

RUN npm install

EXPOSE 5000

CMD [ "node", "index.js" ]