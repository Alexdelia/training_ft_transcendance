#############
##   DEV   ##
#############

# node version 16
# name image dev
FROM node:16 AS dev

# workdir inside the container
WORKDIR /ft_transcendence/src/app

# copy package.json and package-lock.json from host to container workdir
COPY package*.json ./

# since we have package*.json, the npm intall command will install all dependency
RUN npm install

# copy app src
COPY . .

RUN npm run build

# port of nest
EXPOSE 3000

##############
##   PROD   ##
##############

FROM node:16 AS prod

ARG NODE_ENV=prod
ENV NODE_ENV=${NODE_ENV}

WORKDIR /ft_transcendence/src/app

COPY --from=dev /ft_transcendence/src/app/ .

EXPOSE 3000

# run app
CMD [ "node", "dist/main" ]
