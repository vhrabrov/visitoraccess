FROM node:lts-alpine
WORKDIR /usr/src/app
RUN apk add --no-cache bash wget

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001
CMD [ "npm", "start" ]