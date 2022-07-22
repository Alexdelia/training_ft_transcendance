FROM node:16 AS dev

WORKDIR /ft_transcendence/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . .

RUN npm run build

# port of Angular
EXPOSE 4200