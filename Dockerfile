FROM node:boron


RUN npm install webpack -g

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN npm install

# Bundle app source
COPY . /app

RUN npm run build
