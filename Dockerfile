FROM node:10

WORKDIR /app
COPY /src /app
RUN npm install

CMD node app.js

