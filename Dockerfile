# Specify a base image
FROM node:16

#Install some dependencies
WORKDIR /home/node/app
COPY ./ /home/node/app
RUN npm install

# Set up a default command
CMD [ "npm","start" ]