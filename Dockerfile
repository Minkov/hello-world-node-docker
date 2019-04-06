FROM node:10

WORKDIR /app
COPY /src /app
RUN npm install
asd

CMD node app.js

